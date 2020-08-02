import { findTracking, allCouriers } from 'ts-tracking-number';

let lastBody = '';

const textChanged = (): boolean => {
  if (lastBody !== document.body.innerText) {
    lastBody = document.body.innerText;
    return true;
  }

  return false;
};

chrome.runtime.onMessage.addListener((_request, _sender, sendResponse) => {
  sendResponse(findTracking(document.body.innerText, allCouriers));
});

const observer = new MutationObserver(() =>
  textChanged()
    ? chrome.runtime.sendMessage({
      command: 'foundTracking',
      data: findTracking(document.body.innerText)
    })
    : () => { /* nothing */ }
);

window.addEventListener('load', () =>
  observer.observe(document.getElementsByTagName('body')[0], { childList: true, subtree: true }));
