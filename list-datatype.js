Comprehensive List of JavaScript Data Types
//This how JS categorizes our datatypes

Data Types:
//Boolean: may have two values. true or false
var truthy = true;
var notTruthy = false;
console.log(truthy);

//Null datatype. Thhe absence of any kind of value. A none type. Empty.
//Null is defined and hhas access to varible but nothing is there
var nully = null;
console.log(nully);

//Undefined. No value is there yet and must be assigned later
var notDefined;
console.log(notDefined); //Returns undefined. No value is assigned yet


//Number Datatype: JS parser sees 12 is a datatype of number and intrepret this automatically
var age = 12; 
console.log(age); //Returns age 12

//String Datatype. JS also notices string type
var name = "Kristine";
var nameTwo = 'Jordan';
console.log(name);

//Symbol Datatype
//Cannot be changed. Once you create it will be set as that.
//foo is good for using a sample word
var mySym = Symbol('foo');
console.log(mySym);