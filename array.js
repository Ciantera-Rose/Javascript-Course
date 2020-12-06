//Section Introduction: Introduction to JavaScript Arrays
//Arrays give you the ability to store a collection of objects
//A nice data structure to hold all kinds of data and store inside of a variable.  

//Arrays are very for database queries
//How to Create Arrays in JavaScript

//One way to create an array
var generatedArray = new Array(3);

generatedArray;
//3

var generatedArray = new Array('Altuve', 'Correa', 'Spring');

generatedArray; 
// [Altuve', 'Correa', 'Spring']

//More common way. Literal array syntax. Uses brackets
var literalArray = ['Altuve', 'Correa', 'Spring'];

literalArray;  // (3) ['Altuve', 'Correa', 'Spring']

//Javascript is very flexible. Can mix may datatypes in array
//Nested Array. String, int, list, object, function etc. Can take a collection of data 
var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting() { console.log('hey there');}]

//Bracet index to grab elements in ARRAY using zero based numebring system
mixedArray[1] //1
mixedArray[2][2]; //'c'
mixedArray[3].name; //'Kristine
mixedArray[4]; 
function greeting() {
  console.log('hey there');
}

mixedArray[4](); //'hey there'
//Arrays are very handy for data base queries

////////////////////////////////////////////////////////

//Guide to Adding and Removing Array Elements in JavaScript

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.length; // 4

//pop
arr.pop();
//'Springer' pops off last item

//push
arr.push(); //Adds element to end of Array

arr.shift(); // "Altuve"
//shift


//unshift
