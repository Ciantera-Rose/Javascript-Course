//How to Swap Variable Values in JavaScript with Variable Deconstruction

//In modern versions of JS there is a much faster wa to implement thhis than before.

//ie .game:

let playerOne = "Tiffany";
let playerTwo = "kristine"

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);