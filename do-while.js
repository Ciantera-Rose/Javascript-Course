//Guide to While and Do/While Loops in JavaScript



var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

//While loop:
//Declare iterator variable
//While loops have diff set up than for Loops
//Declare var outside of loop
var i = 0;
while (i < players.length) {
  console.log(players[i]);
  i++;  //Will throw an infinite loop without incrementor i++
}
//Condition is checked before iteration
/*
'Altuve',
  'Bregman',
  'Correa',
  'Springer'
  */


//DO/While Loop
//Remove while portion and put at end of code block
var i = 21;
//Do loop, condtion is checked after iteration, goes through program at least 1 time guaranteed. Great for using with games.
do {
  console.log(players[i]);
  i++;
} while (i < players.length)

