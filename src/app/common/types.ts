/* eslint-disable camelcase */

import { TrackingNumber } from 'ts-tracking-number';

export type TrackingResponse = {
  foundTracking: TrackingNumber[];
  storedTracking: StoredTrackingNumber[];
}

export type Message = {
  command: string;
  data: TrackingResponse | TrackingNumber[] | TrackingNumber;
};

export type StoredTrackingNumber = TrackingNumber & {
  status: string | null;
};
