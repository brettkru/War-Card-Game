// HTML Elements
const buttonEl = document.getElementById("get-api-button");

// Event Listeners
buttonEl.addEventListener("click", getCardApi);

function getCardApi() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
}

setTimeout(runAfterTwo, 2000);

function runAfterTwo() {
  console.log("I finally ran");
}
