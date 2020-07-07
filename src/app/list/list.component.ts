import { Component, OnInit, ApplicationRef } from '@angular/core';
import { StoredTrackingNumber } from '../common/types';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  foundTracking: StoredTrackingNumber[] = [];
  storedTracking: StoredTrackingNumber[] = [];

  constructor(private appRef: ApplicationRef, private log: LogService) { }

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
    this.log.background('i will add', tracking);

    chrome.runtime.sendMessage({ command: 'saveTracking', data: [tracking] });
  }

  remove(tracking: StoredTrackingNumber): void {
    chrome.runtime.sendMessage({ command: 'removeTracking', data: [tracking] });
  }

  addListeners(): void {
    chrome.runtime.onMessage.addListener(request => {
      this.log.background('i got a message', request);

      switch (request.command) {
        case 'refresh':
          this.log.background('i got a refresh', request);

          this.storedTracking = request.data.storedTracking;
          this.foundTracking = request.data.foundTracking;
          this.appRef.tick();
          break;
      }
    });
  }


}
