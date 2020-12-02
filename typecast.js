How to Perform Type Casting in JavaScript

'100' - 42;
//58
//Can read str and int unlike Python

100 + null;
//100

'100' + 42;  //Does not work with +
//returns '10042'
//Reason for this is JS doesn't know if we want to append string or perfrom a computation on it.

var ageOne = 12; //Convert number to string
String(ageOne);
//returns '12

ageOne.toString()
//Calls directly on toString method and returns string
//'12'

parseInt(ageOne);
//12

parseFloar('33.5');
//33.5


parseInt('55555555 is my phone number');
//555555555

parseInt('foo 55555555 is my phone number');
//Nan

+ ageTwo;
//33

var foo = + ageTwo;
//undefined
foo;
//33

'100' + 42;
//'10042'
Number('100') + 42; //Cast number type
//142

Number('100') + Number(42);
//142

//BOOLEAN
Number(true);
//1

Number(false);
//0

+'1000' + 40
//1040

(+'1000') + 40
//1040my