import { Component, OnInit, ApplicationRef } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { StoredTrackingNumber } from '../common/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  foundTracking: StoredTrackingNumber[] = [];
  fooTest: string[] = [];
  console = console;

  constructor(private appRef: ApplicationRef) { }

  ngOnInit(): void {
    chrome.runtime.sendMessage({ command: 'getTracking' }, response => {
      chrome.extension.getBackgroundPage().console.log('RESPONSE', response);
      this.foundTracking = response;
      this.appRef.tick();
    });
  }

  add(tracking: StoredTrackingNumber): void {
    chrome.extension.getBackgroundPage().console.log('i will add', tracking);
  }
}
