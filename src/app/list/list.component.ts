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
  storedTracking: StoredTrackingNumber[] = [];

  constructor(private appRef: ApplicationRef) { }

  ngOnInit(): void {
    this.refresh();
    this.addListeners();
  }

  refresh(): void {
    chrome.runtime.sendMessage({ command: 'getTracking' }, response => {
      this.foundTracking = response.foundTracking;
      this.storedTracking = response.storedTracking;
      this.appRef.tick();
    });
  }

  add(tracking: StoredTrackingNumber): void {
    chrome.extension.getBackgroundPage().console.log('i will add', tracking);

    chrome.runtime.sendMessage({ command: 'saveTracking', data: [tracking] });
  }

  addListeners(): void {
    chrome.runtime.onMessage.addListener(request => {
      chrome.extension.getBackgroundPage().console.log('i got a message', request);

      switch (request.command) {
        case 'refresh':
          this.bg('i got a refresh', request);

          this.storedTracking = request.data.storedTracking;
          this.foundTracking = request.data.foundTracking;
          this.appRef.tick();
          break;
      }
    });
  }

  bg(...args): void {
    chrome.extension.getBackgroundPage().console.log(...args);
  }
}
