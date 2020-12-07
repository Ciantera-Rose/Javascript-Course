//Using the Const Variable Type in JavaScript

//var keyword creates a global variable
//May have conflits with other variables
//Pollutes global name space and can be challeging and buggy to find out what's going on with naming issues
//We want to know where our variables are and how to have access to it
var city = 'Scottsdale';
console.log(city);
//'Scottsdale'

//let
//does not pollute global namespace, more speficfic and confined
//only avaiable to function it was added to

let city = 'Scottsdale’;
    console.log(city);

    city = 'Phoenix’;
    console.log(city);
 //'Scottsdale'
 //'Phoenix'   

/*
If you declared city with a let, and then later down on the line used city again 
and redefine it, it wouldn't know city was already declared. You could accidently override it.
*/

//CONST
//Go to way of declaring variables
//Best rule of thumb in modern programming
//const 

const city = 'Scottsdale’;
    console.log(city);

    city = 'Phoenix’;
    console.log(city);  //VM5304:1 Uncaught TypeError: Assignment to constant variable. at <anonymous>:1:6
    //Catches errors that don't give us ability to redefine our variables

//'Scottsdale'
//Does not allow it to be redeclared, redefined or console.logged
