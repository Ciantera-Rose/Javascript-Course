//How to Use the Splice Function in JavaScript to Remove Specific Array Elements

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

// arr.splice(2, 1)
//'Correa'

var foundElement = arr.indexOf('Correa');
foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]
//first arg is index, next is how many items you want to remove


arr.splice(1, 2); // ["Bregman", "Springer"]