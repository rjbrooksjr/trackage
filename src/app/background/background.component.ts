import { Component, OnInit } from '@angular/core';
import { TrackingMatchResult, StoredTrackingNumber, TrackingStorage } from '../common/types';
import { identity, pipe } from 'rxjs';
import { unionWith, both, eqBy, prop, split } from 'ramda';
import { SharedDataService } from '../services/shared-data.service';

const pendingTrackingNumbers: TrackingMatchResult[] = [];

const saveTracking = tracking => chrome.storage.local.set({ tracking }, () => {});

const refresh = x => identity;

const splitTrackingNumbers = (data: TrackingMatchResult[]): StoredTrackingNumber[] => data.map(row => row.trackingNumbers.map(
  trackingNumber => ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') })
)).flat(Infinity);

const storeTrackingNumber = (response: TrackingMatchResult[]) => ({ tracking }: TrackingStorage) => pipe(
  splitTrackingNumbers,
  // @ts-ignore
  unionWith(both(eqBy(prop('courierCode')), eqBy(prop('trackingNumber'))), tracking),
  saveTracking,
)(response);

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.addListeners();
  }

  addListeners(): void {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => changeInfo.status === 'complete' && tab.active &&
      chrome.tabs.query({ active: true, currentWindow: true, }, tabs =>
        tabs[0] && chrome.tabs.sendMessage(tabs[0].id, {}, (response: TrackingMatchResult[]) => {
          console.log('response', response);
          console.log('got', splitTrackingNumbers(response));

          // todo subttract anything in storage
          const trackingNumbers = splitTrackingNumbers(response);

          this.sharedDataService.setFoundTracking(trackingNumbers);
          response && chrome.storage.local.get('tracking', storeTrackingNumber(response));

          console.log('woah', response && response.length > 0, response, response.length);

          chrome.browserAction.setIcon({
            path: trackingNumbers.length > 0 ? './app/assets/add.png' : './app/assets/icon.png',
            tabId: tabs[0].id,
          });
        })
      )
    );
  }
}
