var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "active.png", tabId:tab.id});
    chrome.tabs.insertCSS({file:"style.css"});
  }
  else{
    chrome.browserAction.setIcon({path: "INactive.png", tabId:tab.id});
    chrome.tabs.insertCSS({file:"nostyle.css"});
  }
});
