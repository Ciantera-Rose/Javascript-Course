Guide to JavaScript Objects
//Objects are used for multiple situations
//Can query and set data and make blueprints for your Objects

var user = { name: 'Kristine' }
console.log(user);  //Returns the entire ojbect

var user = { name: 'Kristine' }
console.log(user.name); //Calls the object name and returns 'string'

var user = { name: 'Kristine' }
user.name = 'Jordan';
console.log(user.name); //Retuns 'Jordan'



var user = {.        //Curly brace syntax for objects
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale', 
  grades: {          //Nested object starts with new curly braces
    math: 90,        //new key/value pairs
    science: 80,
    languageArts: 100
  }
}

console.log(user.grades); //Returns all key/value pairs
console.log(user.grades.math); //Returns 90

console.log(user.grades.coding = 99;) //Adds new key/value pair to dict
user.age = 13;
user.grades.coding = 95;


/*
var user = { 
  name: 'Cian', 
  age: 33,
  city: 'Brooklyn',
  emails: {
    gmail: '@gmail.com',
    yahoo: '@yahoo.com',
    apple: '@icloud.com',
  }
}

user.emails.university = '@edu';

console.log(user.emails); 
*/


//Remember to use commas after each key value pair
//Can ceate an object with multipe values and call on them