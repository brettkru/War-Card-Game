// Global Variable
let deckId = "";
let computerScore = 0
let playerScore = 0

// HTML Elements

// Event Listeners
document.getElementById("get-api-button").addEventListener("click", getCardApi);
function getCardApi() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then((r) => r.json())
    .then((data) => {
      deckId = data.deck_id;
      let initialCardAmounts = data.remaining;
      document.getElementById(
        "cards-remaining"
      ).innerHTML = `Cards Remaining: ${initialCardAmounts}`;
    });
}

document.getElementById("draw-button").addEventListener("click", drawCards);
function drawCards() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((r) => r.json())
    .then((data) => {
      let renderedHtml = "";
      let cards = data.cards;
      let cardsRemaming = data.remaining;

      function getCardValue(card) {
        if (
          card.value === "JACK" ||
          card.value === "QUEEN" ||
          card.value === "KING"
        ) {
          return 10;
        } else if (card.value === "ACE") {
          return 11;
        } else {
          return parseInt(card.value);
        }
      }
      let card1 = getCardValue(cards[0]);
      let card2 = getCardValue(cards[1]);
      let renderedCards = cardComparison(card1, card2);
      cards.forEach((card) => {
        renderedHtml += `<img src="${card.image}" alt="Card Image">`;
      });
      document.getElementById("card-images").innerHTML = renderedHtml;
      document.getElementById(
        "card-winner"
      ).innerHTML = `<h2> ${renderedCards} </h2>`;
      document.getElementById(
        "cards-remaining"
      ).innerHTML = `<h3> Cards Remaining ${cardsRemaming}</h3>`;
      
    });
}

function cardComparison(card1, card2) {
  if (card1 > card2) {
    computerScore ++
    return `Computer Wins! Computer Score: ${computerScore} / Player Score ${playerScore}`;
    
  } else if (card1 == card2) {
    return "Its a Tie!";
  } else {
    playerScore ++
    return `Player Wins! Computer Score: ${computerScore} / Player Score ${playerScore}`;
  }
}

