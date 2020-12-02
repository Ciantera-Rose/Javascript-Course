//Guide to JavaScript Hoisting

//Hoisting is a specific way the JS intrepreter reads variables
//Related to where you should define your variables in your program

//Assign a variable
var name;
name = 'Kristine';
console.log(name);

//Cannot do this: cannot print console.log statement before you define it
//Will returned undefined
//Cannot initialize print before declaring var
console.log(age);
var age = 15

//CAN declare after as long as the var is assigned above the console print statement
age = 15 
console.log(age);

var age 

//Declared 
var age 
console.log(age); //Returns undefined because var has not been assigned

age = 15 
console.log(age); //Now returns age because age has been assigned and is defined above

age = 15
console.log(age); 

var age; 
//Returns via hoisting  because var is assigned at very top

//Best practice is to declare and assign at top