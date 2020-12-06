How Variable Scope Works in JavaScript

//Varible scope and functions
//Creates varible 
//Object for sample userObj
// = Varibale object
var userObj = {
  email: 'sample@example.com',
  fullName: 'Kristine Hudgens'
}

//Creates function
//
function dashboardGreeting() {
  console.log("Hi there, ".concat(userObj.fullName));
}

//Call Function
//Function had access to var UserObj even though it's above the function
//Javascript is a less strict language
dashboardGreeting();
'Hi there, Kristine Hudgens'


//Must pay attention to global and local scope
//Now that var is inside function it is local to this function
function dashboardGreeting() {
  var userObj = {
    email: 'sample2@example.com',
    fullName: 'Jordan Hudgens'. //Same varibable BUT added different value for full name
  }
   console.log("Hi there, ".concat(userObj.fullName));
} 
dashboardGreeting();
'Hi there, Jordan Hudgens' //New value returned

console.log(userObj.fullName);
 'Kristine Hudgens'

 //SO if you use var outside of scope and give new values inside function it is overridden by original scope
 //DO NOT polLute the global variable scope. LIMIT global variables or use specific naming

 //if var declaration is removed from userObj, inside the function it returns "Jordan Hudgens" BUT is not longer in the scope of the function
 //That created a global variable within the function
 //Keep it local withh a declaration 