Differences Between Function Expressions and Function Declarations

//This is a function declaration
function gretting() {
  return "Hi there!";
}

//Another option in Javascript is:
//A function expression, or named anonymous function expression

//Differences in Syntax and Flow

//A function expression is a function that is stored inside of a variable
//Second way of writing functions
//Perform assignment, function(), don't name it, hence anonymous.

var greeting = function () {
return 'Hi there again';
};

var greetingTwo = function () {
return 'Hi there again';
};

console.log(greeting());
console.log(gretingTwo());


//New example to see why this is important
//Create a function using a function expression with conditions

var age = 3;
if (age <= 10) {
  var buildMenu = function () {
    return "Kids' Menu";
  };
console.log(buildMenu());
}
//"Kid's menu"

//Important b/c of certain Javascript engines
//Function declarations should not be placed inside code blocks
//Function expressions are used to create on the fly
//Dynamic applications contain building on the fly and are more modular
//Functions good for moving around

