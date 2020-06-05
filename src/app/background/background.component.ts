import { Component, OnInit } from '@angular/core';
import { TrackingMatchResult, StoredTrackingNumber, TrackingStorage } from 'common/types';
import { identity, pipe } from 'rxjs';
import { unionWith, both, eqBy, prop } from 'ramda';

const pendingTrackingNumbers: TrackingMatchResult[] = [];

const saveTracking = tracking => chrome.storage.local.set({ tracking }, () => {});

const refresh = x => identity;

const splitTrackingNumbers = (data: TrackingMatchResult[]): StoredTrackingNumber[] => data.map(row => row.trackingNumbers.map(
  trackingNumber => ({ courierCode: row.courierCode, trackingNumber: trackingNumber.replace(/[^a-zA-Z\d]/g, '') })
)).flat(Infinity);

const storeTrackingNumber = (response: TrackingMatchResult[]) => ({ tracking }: TrackingStorage) => pipe(
  splitTrackingNumbers,
  unionWith(both(eqBy(prop('courierCode')), eqBy(prop('trackingNumber'))), tracking),
  saveTracking,
)(response);

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('BACKGROUND');

    this.addListeners();
  }

  addListeners(): void {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => changeInfo.status === 'complete' && tab.active &&
      chrome.tabs.query({ active: true, currentWindow: true, }, tabs =>
        tabs[0] && chrome.tabs.sendMessage(tabs[0].id, {}, (response) => {
          console.log('got', response);
        })
      )
    );
  }

}
