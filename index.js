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

// const people = [
//   { name: "Jack", hasPet: true },
//   { name: "Jill", hasPet: false },
//   { name: "Alice", hasPet: true },
//   { name: "Bob", hasPet: false },
// ]

// function getPets(peepsWithPets) {
//   return peepsWithPets.hasPet
// }

// const newPeople = people.filter(getPets)

// * Challenge:
//  *
//  * Write your own `filter` function! Don't worry about adding it to the prototype of arrays or anything.
//  * This function should take 2 parameters:
//  * 1. The array you want to filter through, and
//  * 2. A callback function
//  *
//  * Steps for filterArray function logic:
//  * 1. Initialize a new, empty array which will be returned at the end of the `filterArray`s operations (Completed ✅)
//  * 2. Loop through the array passed as the 1st parameter
//  * 3. Inside the loop, call the callback function, passing the individual item you're currently looping over as the argument to your callback function
//  * 4. If the callback function returns `true`, push the current item you're iterating on in the loop to the new array. If it returns `false`, don't push it to the array.
//  * 5. When the loop is over, return the new array
//  */

const people = [
  { name: "Jack", hasPet: true },
  { name: "Jill", hasPet: false },
  { name: "Alice", hasPet: true },
  { name: "Bob", hasPet: false },
];

function filterArray(array, callback) {
  const resultingArray = [];
  array.forEach(item => {
    if (callback(item)){
      resultingArray.push(item)
    }
  })
  return resultingArray
}

