import { Component, OnInit } from '@angular/core';
import { TrackingMatchResult, StoredTrackingNumber, Message } from '../common/types';
import { unionWith, both, eqBy, prop, pipe, differenceWith, head, identity } from 'ramda';
import axios from 'axios';
import * as usps from '../../../tracking_number_data/couriers/usps.json';
import { parse } from 'node-html-parser';
import { allKeys } from '../common/util';

let foundTracking: StoredTrackingNumber[] = [];
let storedTracking: StoredTrackingNumber[] = [];

const refreshPopup = () => {
  chrome.tabs.query({ currentWindow: true, active: true}, pipe(head, prop('id'), setIcon));
  chrome.runtime.sendMessage({
    command: 'refresh',
    data: getTracking(),
  });
};

const saveTracking = (callback: () => void) => (tracking: StoredTrackingNumber[]) =>
  chrome.storage.local.set({ tracking }, callback);

const splitTrackingNumbers = (data: TrackingMatchResult[]) =>
  data.map(row => row.trackingNumbers.map(
    trackingNumber => ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') })
  )).flat(Infinity) as StoredTrackingNumber[];

const storeTrackingNumber = (response: StoredTrackingNumber, storedTracking: StoredTrackingNumber[]) => pipe(
  // @ts-ignore
  unionWith(both(eqBy(prop('courierCode')), eqBy(prop('trackingNumber'))), storedTracking),
  saveTracking(() => {
    refreshPopup();
    void refreshTracking();
  }),
  // @ts-ignore
)(response);

const compareTracking = (x: StoredTrackingNumber, y: StoredTrackingNumber): boolean =>
  x.courierCode === y.courierCode && x.trackingNumber === y.trackingNumber;

const getTracking = () => ({
  foundTracking: differenceWith(compareTracking, foundTracking, storedTracking),
  storedTracking,
});

const getTrackingStatus = (tracking: StoredTrackingNumber): Promise<string> => tracking.courierCode === 'usps'
  ? axios.get(usps.tracking_numbers[0].tracking_url.replace('%s', tracking.trackingNumber))
    .then(prop('data'))
    .then(html => parse(html))
    .then(html => html.querySelector('.delivery_status').querySelector('strong').innerHTML.toString())
  : Promise.resolve('');

const setIcon = (tabId: number) => chrome.browserAction.setIcon({
  path: getTracking().foundTracking.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
  ...tabId && { tabId },
});

const checkTab = (tabId: number) => chrome.tabs.sendMessage(tabId, {}, (response: TrackingMatchResult[]) => {
  foundTracking = [];

  chrome.storage.local.get('tracking', ({ tracking }: { tracking: StoredTrackingNumber[] }) => {
    storedTracking = tracking || [];
    foundTracking = response ? splitTrackingNumbers(response) : [];
    setIcon(tabId);
  });
});

// @todo Don't check delivered packages
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const refreshTracking = () => Promise.all(storedTracking.map(t => allKeys({
  trackingNumber: t.trackingNumber,
  status: getTrackingStatus(t),
  courierCode: t.courierCode,
}) as Promise<StoredTrackingNumber>))
  .then(saveTracking(refreshPopup));

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  ngOnInit(): void {
    this.addListeners();

    chrome.storage.local.get('tracking', ({ tracking }: { tracking: StoredTrackingNumber[] }) => {
      storedTracking = tracking || [];
      void refreshTracking();
      chrome.alarms.create('updateTracking', { periodInMinutes: 60 });
    });
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
          storeTrackingNumber(request.data as StoredTrackingNumber, storedTracking);
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

    chrome.alarms.onAlarm.addListener(alarm => alarm.name === 'updateTracking' ? void refreshTracking() : identity);
  }
}
