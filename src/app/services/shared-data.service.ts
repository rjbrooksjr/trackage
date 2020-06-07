import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoredTrackingNumber } from '../common/types';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private foundTrackingMessage = new BehaviorSubject([]);
  foundTracking = this.foundTrackingMessage.asObservable();

  constructor() { }

  setFoundTracking(tracking: StoredTrackingNumber[]) {
    this.foundTrackingMessage.next(tracking);
  }
}
