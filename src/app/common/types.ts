/* eslint-disable camelcase */

import { TrackingNumber } from 'ts-tracking-number';

export type TrackingResponse = {
  foundTracking: TrackingNumber[];
  storedTracking: TrackingNumber[];
}

export type Message = {
  command: string;
  data: TrackingResponse | TrackingNumber[] | TrackingNumber;
};
