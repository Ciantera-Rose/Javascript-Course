//Guide to the JavaScript Spread Operator
//SYNTAX  is three dots followed by some type of word
//Combining Arrays
let shopping Cart =[345, 375, 765, 123];
let newItems = [98, 123;

shoppingCart.push(newItems);
console.log(shoppingCart);
//Adds array into array

shoppingCart.push(...newItems);
console.log(shoppingCart);
//[345, 375, 765, 123, 98, 123]
//Actually adds numbers to array

// Copying Arrays
const shoppingCart = [345, 375, 765, 123];
const updatedCart = [...shoppingCart];
updatedCart.push(5);
console.log(updatedCart);
console.log(shoppingCart);

//So if you want to make changes to it make copies of it
const orderTotals = [1, 5, 1, 10, 2, 3];
console.log(Math.max(...orderTotals));

// [1, 5, 1, 10, 2, 3]
// ...[1, 5, 1, 10, 2, 3]
// 1, 5, 1, 10, 2, 3

const { starter, closer, ...relievers } = {
  starter: 'Verlander',
  closer: 'Giles',
  relief_1: 'Morton',
  relief_2: 'Gregerson'
}

console.log(starter);
console.log(closer);
console.log(relievers);

