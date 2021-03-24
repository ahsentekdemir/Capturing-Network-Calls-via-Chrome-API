function requestHandler(req){
    console.log(req);
  }
  function setListeners() {
    chrome.webRequest.onBeforeSendHeaders.addListener(requestHandler,
                                                      {urls: ["<all_urls>"]},
                                                      ["requestHeaders"]);
    chrome.webRequest.onBeforeRequest.addListener(requestHandler,
                                                  {urls: ["<all_urls>"]},
                                                  ['requestBody']);
    chrome.webRequest.onCompleted.addListener(requestHandler,
                                             {urls: ["<all_urls>"]});
  }
  function removeListeners() {
    chrome.webRequest.onBeforeSendHeaders.removeListener(requestHandler);
    chrome.webRequest.onBeforeRequest.removeListener(requestHandler);
    chrome.webRequest.onCompleted.removeListener(requestHandler);
  }
  
  setListeners();
  requestHandler();