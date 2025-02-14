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
    });
}

document.getElementById("draw-button").addEventListener("click", drawCards);

function drawCards() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((r) => r.json())
    .then((data) => {
      let renderedHtml = "";
      let cards = data.cards;
      
      function getCardValue(card) {
        if (card.value === "ACE" || card.value === "JACK" || card.value === "QUEEN" || card.value === "KING") {
          return 10
        } else {
          return parseInt(card.value)
        }
      }

      let card1 = getCardValue(cards[0])
      let card2 = getCardValue(cards[1])
      cardComparison(card1, card2);

      cards.forEach((card, index) => {
        renderedHtml += `<img src="${card.image}" alt="Card Image">`;
      });
      document.getElementById("card-images").innerHTML = renderedHtml;
    });
}

function cardComparison(card1, card2) {
  if (card1 > card2){
    console.log("Card 1 Wins!")
  } else if (card1 == card2) {
    console.log("Its a Tie!")
  } else {
    console.log("Card 2 Wins!")
  }
}
