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

document.getElementById("draw-button").addEventListener("click", drawCards);

function drawCards() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((r) => r.json())
    .then((data) => {
      let renderedHtml = "";
      let cards = data.cards;
      cards.forEach((card) => {
        renderedHtml += `<img src="${card.image}" alt="Card Image">`;
      });
      document.getElementById("card-images").innerHTML = renderedHtml;
    });
}
