//Guide to Adding and Removing Array Elements in JavaScript


var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

//length is a bulit in propety of arrays in Javascript
arr.length; // 4


//PUSH and POP 
//Allow you to add and remove items to and from last element of array
//pop
arr.pop();
//'Springer' pops off last item
// ['Altuve', 'Bregman', 'Correa']

//push
arr.push('Bagwell'); //Adds element to end of Array
arr;
// (4) ['Altuve', 'Bregman', 'Correa', 'Bagwell']

var elementPopped = arr.pop();
elementPopped;
//'Bagwell'
//Pops last element off of array

//Shift and unshift
//Allow you to add and removed items at FRONT of array
arr.shift(); 
// "Altuve" Removes first element


arr.unshift('Kyle');
// ['Kyle', 'Bregman', 'Correa']
//unshift Adds new value to first element of array