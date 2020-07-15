import { Pipe, PipeTransform } from '@angular/core';
import { StoredTrackingNumber } from '../common/types';
import { differenceWith } from 'ramda';

const compareTracking = (x: StoredTrackingNumber, y: StoredTrackingNumber): boolean =>
  x.courierCode === y.courierCode && x.trackingNumber === y.trackingNumber;

@Pipe({
  name: 'foundTracking'
})
export class FoundTrackingPipe implements PipeTransform {

  transform(value: StoredTrackingNumber[], stored: StoredTrackingNumber[]): StoredTrackingNumber[] {

    return differenceWith(compareTracking, value, stored);
  }

}
