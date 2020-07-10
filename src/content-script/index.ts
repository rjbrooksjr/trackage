import { pipe, prop, flip, match, uniq, map, trim, applySpec, filter, flatten, join, any, test, none } from 'ramda';
import { TrackingData, SerialData, Carrier, TrackingMatchResult } from '../app/common/types';
import * as usps from '../../tracking_number_data/couriers/usps.json';
import { mod10, dummy, getSerialData } from '../app/common/util';

const carriers = [usps];

const getList = (trackingNumber: TrackingData): string[] => pipe(
  prop('regex'),
  join(''),
  (r: string) => new RegExp(r, 'g'),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  flip(match)(getVisibleText()) as any,
  uniq,
  map(trim),
)(trackingNumber);

const getVisibleText = () => {
  window.getSelection().removeAllRanges();

  const range = document.createRange();
  range.selectNode(document.body);
  window.getSelection().addRange(range);

  const visibleText = window.getSelection().toString().trim();
  window.getSelection().removeAllRanges();

  return visibleText;
};

const validator = (trackingData: TrackingData): (x: SerialData) => boolean =>
  trackingData.validation.checksum.name === 'mod10'
    ? mod10
    : dummy;

const getTrackingNumbers = (carrier: Carrier): TrackingMatchResult => applySpec({
  courierCode: prop('courier_code'),
  trackingNumbers: pipe(
    prop('tracking_numbers'),
    pipe(
      map((tn: TrackingData) => pipe(
        getList,
        filter((x: string) => validator(tn)(getSerialData(x, tn)))
      )(tn)),
      flatten
    ),
    a => filter((t: string) => none(test(new RegExp(`^${t}([a-zA-Z0-9]+)`)), a))(a),
  )
})(carrier) as TrackingMatchResult;

chrome.runtime.onMessage.addListener((_request, _sender, sendResponse) =>
  sendResponse(carriers.map(getTrackingNumbers) || []));
