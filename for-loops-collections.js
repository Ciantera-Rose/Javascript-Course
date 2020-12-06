//Guide to For Loops in JavaScript
//Loop through Collections
//Players Array
var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

//For loop:
//Declares 3 things
//First declare  and assign a variable that is used throughout the loop
/*
Then declare a conditional. As it's looping, with each iteration, it's going to check if this condition is true.
If it true it keeps going. As soon as condition is false it's going to exit out of the loop
*/

//Loop through entire array until i, which starts at 0, is then greater than or equal to player length. 
//As long as i is less then playrs length then it keeps going.
//How does i chnage? ... i++ incrementor. i starts at 0, next time it goes through loop it chnages to 1, and does this until it's > players then
for (let i = 0; < players.length; i++) {
   console.log(players[i]) //Grab element index i, which starts at 0. Length will be 1 greater than last index value b/c it starts at zero
}

//for in loop
//for and then declare interator variable
for (player in players) {
  console.log(players[player]); 
  //Player doesn't represent the value, it represents the INDEX
  //'0'
  // 'Altuve'
  //'1'
  //'Bregman'
  // etc...

for (student of students) {
  console.log(student)
}

//forEach loop
//passes in function that can take an argument but here one is not passed in b/c it happens automatically
players.forEach(function(element) {
  console.log(element);
});
/*'Altuve',
  'Bregman',
  'Correa',
  'Springer'
*/  

//OR this way
//Returns a fucntion and is calling back to a function
students.forEach(i => console.log(i))



