/*
Directions:
Write a function that accepts a string.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.
Examples:
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'
*/

// const toCapital = str => {
//     const words = str.split(' ');
//     return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
// }
// const shortStr = 'hi there';
// const longStr = 'the quick brown fox jumped over the lazy dog'

// toCapital(longStr);  //?
//The Quick Brown Fox Jumped Over The Lazy Dog

/*
const words = str.split(' ');
return words 
["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
*/

/*
return words.map(word => word[0].toUpperCase() 
[ 'T', 'Q', 'B', 'F', 'J', 'O', 'T', 'L', 'D' ]
*/

/*
return words.map(word => word[0].toUpperCase() + word.slice(1))
[ 'The','Quick','Brown','Fox','Jumped','Over','The','Lazy','Dog' ]
*/

/* 
return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
The Quick Brown Fox Jumped Over The Lazy Dog
*/

/*
The map() method creates a new array populated with the results 
of calling a provided function on every element in the calling array.
*/

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1)); //?
  }
  return words.join(' ');
}

const longSent = 'the quick brown fox jumped over the lazy dog';
console.log(capitalize(longSent));
