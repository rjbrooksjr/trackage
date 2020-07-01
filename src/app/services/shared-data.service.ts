import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoredTrackingNumber } from '../common/types';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private foundTrackingMessage = new BehaviorSubject([{ courierCode: 'foo', trackingNumber: '123', status: 'sss' }]);
  foundTracking = this.foundTrackingMessage.asObservable();

  constructor() { }

  setFoundTracking(tracking: StoredTrackingNumber[]) {
    console.log('found', tracking);
    this.foundTrackingMessage.next(tracking);
  }
}
