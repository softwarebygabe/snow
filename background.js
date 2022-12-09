// // Called when the user clicks on the browser action icon
// chrome.browserAction.onClicked.addListener(onClick);

// function onClick(tab) {
//   console.log("hello");
//   console.log(tab);
//   // var button = document.getElementById("addSnow");
//   // button.addEventListener("click", (e) => {
//   //   console.log("add snow clicked");
//   // });
// }

document.addEventListener("DOMContentLoaded", () => {
  var button = document.getElementById("addSnow");
  var config = {};
  document.getElementById("maxFlakeRadius").addEventListener("change", (e) => {
    config.maxFlakeRadius = e.target.value;
  });
  document.getElementById("fallingSpeed").addEventListener("change", (e) => {
    config.fallingSpeed = e.target.value;
  });
  // submit
  button.addEventListener("click", () => {
    console.log("add snow");
    chrome.tabs.executeScript(
      { code: "var config = " + JSON.stringify(config) },
      function () {
        chrome.tabs.executeScript({ file: "snow.js" });
      }
    );
  });
});
