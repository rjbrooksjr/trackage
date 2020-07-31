import { Component, OnInit } from '@angular/core';
import { Message, StoredTrackingNumber } from '../common/types';
import { unionWith, both, eqBy, prop, pipe, differenceWith, head, identity, path, mergeRight, pathOr } from 'ramda';
import axios from 'axios';
import { parse } from 'node-html-parser';
import { TrackingNumber } from 'ts-tracking-number';

let foundTracking: TrackingNumber[] = [];
let storedTracking: StoredTrackingNumber[] = [];

const refreshPopup = () => {
  chrome.tabs.query({ currentWindow: true, active: true}, pipe(head, prop('id'), setIcon));
  chrome.runtime.sendMessage({
    command: 'refresh',
    data: getTracking(),
  });
};

const saveTracking = (callback: () => void) => (tracking: TrackingNumber[]) =>
  chrome.storage.local.set({ tracking }, callback);

const storeTrackingNumber = (response: TrackingNumber, storedTracking: StoredTrackingNumber[]) => pipe(
  // @ts-ignore
  unionWith(both(eqBy(path(['courier', 'code'])), eqBy(prop('trackingNumber'))), storedTracking),
  saveTracking(() => {
    refreshPopup();
    void refreshTracking();
  }),
  // @ts-ignore
)(response);

const compareTracking = (x: TrackingNumber, y: TrackingNumber): boolean =>
  x.courier.code === y.courier.code && x.trackingNumber === y.trackingNumber;

const getTracking = () => ({
  foundTracking: differenceWith(compareTracking, foundTracking, storedTracking),
  storedTracking,
});

const getTrackingHtml = (tracking: TrackingNumber): Promise<HTMLElement & { valid: boolean; }> =>
  axios.get(tracking.trackingUrl.replace('%s', tracking.trackingNumber))
    .then(prop('data'))
    .then(html => parse(html)) as Promise<HTMLElement & { valid: boolean; }>;

const buildFedexData = (trackingNumber: string): string => encodeURI(`data={
    "TrackPackagesRequest":{
      "appType":"WTRK",
      "appDeviceType":"DESKTOP",
      "supportHTML":false,
      "supportCurrentLocation":true,
      "uniqueKey":"",
      "processingParameters":{},
      "trackingInfoList":[
        {"trackNumberInfo":{"trackingNumber":"${trackingNumber}","trackingQualifier":"","trackingCarrier":""}}
      ]
    }
  }
  &action=trackpackages
  &locale=en_US
  &version=1
  &format=json
`);

// @todo add other cariers now
const getTrackingStatus = (tracking: TrackingNumber): Promise<string> => tracking.courier.code === 'usps'
  ? getTrackingHtml(tracking)
    .then(html => html.querySelector('.delivery_status').querySelector('strong').innerHTML.toString())
  : tracking.courier.code ==='fedex'
  ? axios.post('https://www.fedex.com/trackingCal/track', buildFedexData(tracking.trackingNumber))
    .then(pathOr('n/a', ['data', 'TrackPackagesResponse', 'packageList', 0, 'keyStatus']))
  : tracking.courier.code === 'ups'
  ? axios.post('https://wwwapps.ups.com/track/api/Track/GetStatus?loc=en_US', {
    Locale: 'en_US',
    Requester: 'st/trackdetails',
    TrackingNumber: ['1z30971f0321207279']
  })
    .then(pathOr('', ['data', 'trackDetails', 0, 'packageStatus']))
  : Promise.resolve('n/a');

const setIcon = (tabId: number) => chrome.browserAction.setIcon({
  path: getTracking().foundTracking.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
  ...tabId && { tabId },
});

const checkTab = (tabId: number) => chrome.tabs.sendMessage(tabId, {}, (response: TrackingNumber[]) => {
  foundTracking = [];

  chrome.storage.local.get('tracking', ({ tracking }: { tracking: StoredTrackingNumber[] }) => {
    storedTracking = tracking || [];
    foundTracking = response || [];
    setIcon(tabId);
  });
});

// @todo Don't check delivered packages
const refreshTracking = () => Promise.all(storedTracking.map(getTrackingStatus))
  .then(statuses => storedTracking.map((t, i) => mergeRight(t, { status: statuses[i]})))
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

    chrome.webRequest.onCompleted.addListener(
      ({ tabId }) => chrome.tabs.query({ active: true, currentWindow: true, }, tabs =>
        tabs[0] && tabs[0].id === tabId && checkTab(tabId)),
      {urls: ['<all_urls>']},
      [],
    );

    // chrome.webRequest.onCompleted.addListener(({ tabId }) => checkTab(tabId), {urls: ['<all_urls>']}, []);
    // chrome.webRequest.onCompleted.addListener(foo => {
    //   console.log('WEBR', foo);
    // });

    chrome.tabs.onActivated.addListener(({ tabId }) => checkTab(tabId));

    chrome.runtime.onMessage.addListener((request: Message, sender, sendResponse) => {
      switch (request.command) {
        case 'getTracking':
          sendResponse(getTracking());
          break;
        case 'saveTracking':
          storeTrackingNumber(request.data as TrackingNumber, storedTracking);
          break;
        case 'removeTracking':
          chrome.storage.local.set({
            tracking: differenceWith(compareTracking, storedTracking, request.data as TrackingNumber[])
          });
          break;
        case 'refreshTracking':
          console.log('REFRESHING');
          void refreshTracking();
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
