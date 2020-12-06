//How to Work with Function Arguments in JavaScript
//We will pass data into functons with function arguments or function parameters

//Each function parameter, firstName and lastNAme, can be used however we want inside of function block
//Can be treaetd like a variable for any kind of datapoint

function fullName(firstName, lastName) {
  return lastName().toUpperCase() + ", " + firstName.toUpperCase();
}
fullName('Ciantera', 'Rose');
//"ROSE, CIANTERA"

function sample(arg1, arg2) {
console.log(arg1);
console.log(arg2);
}

sample();  
//undefined b/c no arguements were passed 
//Beware b/c you do not receive an error in JavaScript
//So it's easy to build a program that don't throw and error but doesn't run correctly


function fullName(firstName, lastName, language = 'English') {
  return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Ciantera', 'Rose'));
//Defaults to English
//"ROSE, CIANTERA - English"

console.log(fullName('Ciantera', 'Rose', 'Spanish'));
//Spanish is passed in and overrides default
//"ROSE, CIANTERA - Spanish"

//Function Arguments: Reference vs Value
//The types of items you can pass into functions
//Objects behave differently than variables, b/c reference vs value
//When you pass in objects they get treated by REFERENCE, 
//which means they aren't grabbing the values but are referencing the original object
//If you pass in a varibale it makes a copy of that varibles value and uses that

//VARIABLE OBJECT
var someUser = {
name: 'Jordan'
}

function nameFormatter (user) {
    return user.name = 'someOtherName';
}
nameFormatter(someUser);
'someOtherName'

someUser;
// Object {name: 'someOtherName'}
//Overrides name
//Side effect

//SO when you pass an object in as an argument it's treated as a reference
//The function is going to go and look at thhe reference to the object

//If you want to pass in an object just pass in the actual value itself
function nameFormatter (user) {
    return user.name = 'someOtherName';
}
someUser.name = 'Kristine';
someUser;
//'Kristine'
nameFormatter(someUser.name);
//'someOtherName'

someUser.name;
//'Kristine'
//Has not chnaged the value
//So that's how you can pass in an object without having it's reference point changed

//VARIABLE VALUE
var someName = "Cian";

function someOtherNameFormatter(name){
  return name = 'Rose';
}

someOtherNameFormatter(someName);
//'Rose

someName;
//"Cian"





