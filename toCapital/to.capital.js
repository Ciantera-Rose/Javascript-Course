//Create a Capitalize Function in JavaScript
const toCapital = str => {
    const words = str.split(' ');
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}
const shortStr = 'Hi there';
const longStr = 'the quick brown fox jumped over the lazy dog'


toCapital(longStr); 
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
