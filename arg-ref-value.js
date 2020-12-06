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





