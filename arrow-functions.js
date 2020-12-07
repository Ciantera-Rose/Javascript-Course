//Arrow Functions in JavaScript
//Another way of defining a functon thhat you want to wrap up and call later
//Clean syntax and being used in modern Javascript
//Two ways:


// Same function written as function declaration
function fullName (fName, lName) { 
  console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
fullName = (fName, lName) => { 
  console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
//Base Case example
 helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for SINGLE arguments
//Do not need the () for single arguments but you can and nothing changes
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with MULTIPLE arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');

//NO brackets imply IMPLICITELY RETURNED