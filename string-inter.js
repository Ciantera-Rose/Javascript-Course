//Guide to Backtick string interpolation in Javascript
//Uses backticks and $ sign with curly bracket notation

const lyrics = 'Never gonna give you up';
console.log("I'm " + lyrics);
console.log(`I'm ` ${lyrics});
//I'm Never gonna give you up

console.log(`I'm` ${2+2}));
//-----------------------------------------------------------------------------
//Integrating Conditionals into JavaScript Strings with Ternary Operators

//If something is true perform one action and if it's not true perform some other action

const page  = "Home";
console.log(`class=${ page === "Home" ? "master-layout" : "secondary-layout"}`)
