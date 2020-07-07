import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  background(...args): void {
    chrome.extension.getBackgroundPage().console.log(...args);
  }
}
