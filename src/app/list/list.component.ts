import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Message, TrackingResponse } from '../common/types';
import { LogService } from '../services/log.service';
import { TrackingNumber } from 'ts-tracking-number';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  foundTracking: TrackingNumber[] = [];
  storedTracking: TrackingNumber[] = [];

  constructor(private appRef: ApplicationRef, private log: LogService) { }

  ngOnInit(): void {
    this.refresh();
    this.addListeners();
  }

  refresh(): void {
    chrome.runtime.sendMessage({ command: 'getTracking' }, (response: TrackingResponse) => {
      this.foundTracking = response.foundTracking;
      this.storedTracking = response.storedTracking;
      this.appRef.tick();
    });
  }

  add(tracking: TrackingNumber): void {
    chrome.runtime.sendMessage({ command: 'saveTracking', data: [tracking] });
  }

  remove(tracking: TrackingNumber): void {
    chrome.runtime.sendMessage({ command: 'removeTracking', data: [tracking] });
  }

  addListeners(): void {
    chrome.runtime.onMessage.addListener((request: Message) => {

      switch (request.command) {
        case 'refresh':
          this.storedTracking = (request.data as TrackingResponse).storedTracking;
          this.foundTracking = (request.data as TrackingResponse).foundTracking;
          this.appRef.tick();
          break;
      }
    });
  }


}
