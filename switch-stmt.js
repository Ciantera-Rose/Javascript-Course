How to Build a Switch Statement in JavaScript to Check for Data Types
//Case Statememt: Gives you the ability to build your own scenarios
//It's going to take in the data point and not matter what's inside it's going to output what datatype that specific piece of value was.
var dataPoint = false;

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log('No matches');
}
  //default if nothing else checks    