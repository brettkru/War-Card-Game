// Global Variable
let deckId = "";

// HTML Elements

// Event Listeners
document.getElementById("get-api-button").addEventListener("click", getCardApi);

function getCardApi() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then((r) => r.json())
    .then((data) => {
      deckId = data.deck_id;
      console.log(deckId);
    });
}


