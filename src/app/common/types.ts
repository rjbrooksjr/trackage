/* eslint-disable camelcase */

import { TrackingNumber } from 'ts-tracking-number';

export type TrackingResponse = {
  foundTracking: TrackingNumber[];
  storedTracking: StoredTrackingNumber[];
}

export type EditTrackingData = {
  trackingNumber: string;
  editTracking: EditForm;
}

export type Message = {
  command: string;
  data: TrackingResponse | TrackingNumber[] | TrackingNumber | EditForm;
};

export type StoredTrackingNumber = TrackingNumber & {
  status?: string;
  label?: string;
};

export type EditForm = {
  label?: string;
};

export type AddForm = {
  label?: string;
  trackingNumber: string;
};

export type HelpForm = {
  email: string;
  text: string;
};
