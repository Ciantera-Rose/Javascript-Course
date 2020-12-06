JavaScript Conditional Section Introduction
//Check condtions for true / false values
//Works with code blakcs
//else if 
//Switch Statements: Can check for multiple cases

var age = 12;
var ageTwo = 15;

if (age === ageTwo) {
  console.log('They are equal');
}

//Strict equal checks the value and the type
//== is considered poor practice. Best practive is to use ===
//Operands are the items the operators will be comparing

//
if (age !== ageTwo) {
  console.log('Not equal');
}
//Not equal if different type or different values


if (age >= 25) {
  console.log('Old enough to rent a car');
}


if (age == 25) {
console.log('Old enough to rent a car');
}


if (age < 10) {
console.log('You can eat from the kid menu');
}