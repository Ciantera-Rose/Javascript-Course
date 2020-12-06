JavaScript Functions

Basic Syntax for Building Functions in JavaScript

function hiThere(){
console.log('Hi there');
}

//call function 
//hiThere();
//Prints Hi There but doesn't return it
// = a void function. This does not return anything back

function hiThereTwo() {
    return 'Hi there again';
}
//call function to return it
hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there
//Just prints, but is undefined b/c it was never returned

storedText; // undefined

var storedTextTwo = hiThereTwo();
storedTextTwo; // "Hi there again"
//returns b/c it was returned. Returns a string.