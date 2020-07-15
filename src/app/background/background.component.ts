import { Component, OnInit } from '@angular/core';
import { TrackingMatchResult, StoredTrackingNumber, Message } from '../common/types';
import { unionWith, both, eqBy, prop, pipe, differenceWith } from 'ramda';

let foundTracking: StoredTrackingNumber[] = [];
let storedTracking: StoredTrackingNumber[] = [];

const refreshPopup = () => chrome.runtime.sendMessage({
  command: 'refresh',
  data: getTracking(),
});

const saveTracking = (tracking: StoredTrackingNumber[]) => chrome.storage.local.set({ tracking }, refreshPopup);

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

const getTracking = () => ({
  foundTracking: differenceWith(compareTracking, foundTracking, storedTracking),
  storedTracking,
});

const checkTab = (tabId: number) => chrome.tabs.sendMessage(tabId, {}, (response: TrackingMatchResult[]) => {
  foundTracking = [];

  chrome.storage.local.get('tracking', ({ tracking }: { tracking: StoredTrackingNumber[] }) => {
    storedTracking = tracking || [];

    foundTracking = response ? splitTrackingNumbers(response) : [];

    chrome.browserAction.setIcon({
      path: foundTracking.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
      tabId,
    });
  });
});

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  ngOnInit(): void {
    this.addListeners();

    chrome.storage.local.get('tracking', ({ tracking }: { tracking: StoredTrackingNumber[] }) =>
      storedTracking = tracking || []);
  }

  addListeners(): void {
    chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => changeInfo.status === 'complete' && tab.active &&
      chrome.tabs.query({ active: true, currentWindow: true, }, tabs =>
        tabs[0] && checkTab(tabs[0].id)
      )
    );

    chrome.tabs.onActivated.addListener(({ tabId }) => checkTab(tabId));

    chrome.runtime.onMessage.addListener((request: Message, sender, sendResponse) => {
      switch (request.command) {
        case 'getTracking':
          sendResponse(getTracking());
          break;
        case 'saveTracking':
          storeTrackingNumber(request.data as TrackingMatchResult[], storedTracking);
          break;
        case 'removeTracking':
          chrome.storage.local.set({
            tracking: differenceWith(compareTracking, storedTracking, request.data as StoredTrackingNumber[])
          });
          break;
      }
    });

    chrome.storage.onChanged.addListener(changes => {
      if (changes.tracking) {
        storedTracking = changes.tracking.newValue as StoredTrackingNumber[];
        refreshPopup();
      }
    });
  }
}
