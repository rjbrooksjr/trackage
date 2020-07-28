import { findTracking } from 'ts-tracking-number';

const getVisibleText = () => {
  window.getSelection().removeAllRanges();

  const range = document.createRange();
  range.selectNode(document.body);
  window.getSelection().addRange(range);

  const visibleText = window.getSelection().toString().trim();
  window.getSelection().removeAllRanges();

  return visibleText;
};

chrome.runtime.onMessage.addListener((_request, _sender, sendResponse) =>
  sendResponse(findTracking(getVisibleText())));
