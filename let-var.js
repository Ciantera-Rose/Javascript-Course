//Understanding the Key Difference Between Var and  Let Variables Types

var age = 12;
console.log(age);

//Can be redifined

var age = 15;
console.log(age);

//let works differently
//Stricter frame work for redifining Variables
//May accidently override
//A data point is handy when you don't want something overwritten
let age = 12;
console.log(age);

//Can be redifined

let age = 15;
console.log(age);

//error is 'age' has already been declared

//YOU CAN ressign age to something different later without let. Using just 

age = 20;
console.log(age);