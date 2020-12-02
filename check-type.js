How to Check for Data Types in JavaScript

typeof 12;
console.log(typeof)
//returns "number"

typeof 'Astros';
console.log(typeof)
//returns "string"


typeof true;
console.log(typeof)
//returns "boolean"


typeof { name: "Kristine" };
console.log(typeof)
//returns "object"


//Practical example
var age; //returns undefined bc nothing is assigned

typeof age; 
console.log(typeof)
//"undefined" //returns undefined bc nothing was set
age = null //returns 'object'. The age is the object assigend to null
