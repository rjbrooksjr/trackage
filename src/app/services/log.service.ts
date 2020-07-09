import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  background(...args): void {
    chrome.extension.getBackgroundPage().console.log(...args);
  }
}
