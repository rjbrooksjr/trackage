import { Component, OnInit } from '@angular/core';
import { TrackingMatchResult, StoredTrackingNumber, TrackingStorage } from '../common/types';
import { identity, pipe } from 'rxjs';
import { unionWith, both, eqBy, prop, split, whereEq, where, complement, equals, differenceWith } from 'ramda';
import { SharedDataService } from '../services/shared-data.service';

const saveTracking = (sendResponse) => (tracking) => {
  console.log('ok saving', tracking);
  chrome.storage.local.set({ tracking });
};

const refresh = x => identity;

const splitTrackingNumbers = (data: TrackingMatchResult[]): StoredTrackingNumber[] => data.map(row => row.trackingNumbers.map(
  trackingNumber => ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') })
)).flat(Infinity);

const storeTrackingNumber = (response: TrackingMatchResult[], storedTracking: StoredTrackingNumber[], sendResponse: () => void) => pipe(
  // @ts-ignore
  unionWith(both(eqBy(prop('courierCode')), eqBy(prop('trackingNumber'))), storedTracking),
  saveTracking(sendResponse),
)(response);

const compareTracking = (x, y) => x.courierCode === y.courierCode && x.trackingNumber === y.trackingNumber;

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  foundTracking: StoredTrackingNumber[] = [];
  storedTracking: StoredTrackingNumber[] = [];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.addListeners();

    chrome.storage.local.get('tracking', ({ tracking }) => this.storedTracking = tracking);
  }

  addListeners(): void {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => changeInfo.status === 'complete' && tab.active &&
      chrome.tabs.query({ active: true, currentWindow: true, }, tabs =>
        tabs[0] && chrome.tabs.sendMessage(tabs[0].id, {}, (response: TrackingMatchResult[]) => {
          console.log('response', response);
          console.log('got', splitTrackingNumbers(response));

          chrome.storage.local.get('tracking', stored => {
            this.foundTracking = differenceWith(compareTracking, splitTrackingNumbers(response), this.storedTracking);

            chrome.browserAction.setIcon({
              path: this.foundTracking.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
              tabId: tabs[0].id,
            });

          });
        })
      )
    );

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log('i got message', request);

      switch (request.command) {
        case 'getTracking':
          sendResponse({ foundTracking: this.foundTracking, storedTracking: this.storedTracking });
          break;
        case 'saveTracking':
          storeTrackingNumber(request.data, this.storedTracking, sendResponse);
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
        this.storedTracking = changes.tracking.newValue;
        chrome.runtime.sendMessage({ command: 'refresh', data: { foundTracking: this.foundTracking, storedTracking: this.storedTracking }});
      }
    });
  }
}
