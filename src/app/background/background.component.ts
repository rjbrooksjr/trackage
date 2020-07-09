import { Component, OnInit } from '@angular/core';
import { TrackingMatchResult, StoredTrackingNumber, Message } from '../common/types';
import { unionWith, both, eqBy, prop, pipe, differenceWith } from 'ramda';

const saveTracking = (tracking: StoredTrackingNumber[]) => chrome.storage.local.set({ tracking });

const splitTrackingNumbers = (data: TrackingMatchResult[]) =>
  data.map(row => row.trackingNumbers.map(
    trackingNumber => ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') })
  )).flat(Infinity) as StoredTrackingNumber[];

const storeTrackingNumber = (response: TrackingMatchResult[], storedTracking: StoredTrackingNumber[]) => pipe(
  // @ts-ignore
  unionWith(both(eqBy(prop('courierCode')), eqBy(prop('trackingNumber'))), storedTracking),
  saveTracking,
  // @ts-ignore
)(response);

const compareTracking = (x: StoredTrackingNumber, y: StoredTrackingNumber): boolean =>
  x.courierCode === y.courierCode && x.trackingNumber === y.trackingNumber;

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  foundTracking: StoredTrackingNumber[] = [];
  storedTracking: StoredTrackingNumber[] = [];

  ngOnInit(): void {
    this.addListeners();

    chrome.storage.local.get('tracking', ({ tracking }: { tracking: StoredTrackingNumber[] }) =>
      this.storedTracking = tracking || []);
  }

  addListeners(): void {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => changeInfo.status === 'complete' && tab.active &&
      chrome.tabs.query({ active: true, currentWindow: true, }, tabs =>
        tabs[0] && chrome.tabs.sendMessage(tabs[0].id, {}, (response: TrackingMatchResult[]) => {

          chrome.storage.local.get('tracking', ({ tracking }: { tracking: StoredTrackingNumber[] }) => {
            this.storedTracking = tracking;

            // todo move this filtering to view
            this.foundTracking = differenceWith(compareTracking, splitTrackingNumbers(response), this.storedTracking);

            chrome.browserAction.setIcon({
              path: this.foundTracking.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
              tabId: tabs[0].id,
            });

          });
        })
      )
    );

    chrome.runtime.onMessage.addListener((request: Message, sender, sendResponse) => {
      console.log('i got message', request);

      switch (request.command) {
        case 'getTracking':
          sendResponse({ foundTracking: this.foundTracking, storedTracking: this.storedTracking });
          break;
        case 'saveTracking':
          storeTrackingNumber(request.data, this.storedTracking);
          break;
        case 'removeTracking':
          chrome.storage.local.set({ tracking: differenceWith(compareTracking, this.storedTracking, request.data) });
          break;
      }
    });

    chrome.storage.onChanged.addListener((changes, namespace) => {
      console.log('storage change', namespace, changes);

      if (changes.tracking) {
        console.log('sending message');
        this.storedTracking = changes.tracking.newValue as StoredTrackingNumber[];
        chrome.runtime.sendMessage({
          command: 'refresh',
           data: { foundTracking: this.foundTracking, storedTracking: this.storedTracking }
        });
      }
    });
  }
}
