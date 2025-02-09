// HTML Elements


// Event Listeners
document.getElementById("get-api-button").addEventListener("click", getCardApi);

function getCardApi() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
}


const voters = [
  {name: "Joe", email: "joe@joe.com", voted: true},
  {name: "Jane", email: "jane@jane.com", voted: true},
  {name: "Bo", email: "bo@bo.com", voted: false},
  {name: "Bane", email: "bane@bane.com", voted: false}
]

const filteredVoters = voters.filter(voter => voter.voted).map(voter => voter.email)


console.log(filteredVoters)