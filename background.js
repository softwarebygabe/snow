
// Called when the user clicks on the browser action icon
chrome.browserAction.onClicked.addListener(onClick);

function onClick(tab) {
  console.log('Current Tab:');
  console.log(tab);
  chrome.tabs.executeScript({
    file: 'snow.js'
  });
}
