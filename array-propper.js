//Create an Array Popper that Alternates Returning from Each Side of an Array in //JavaScript

//Build out a class and then a method or function that 
//call first element and pop of last and so on
//Array = ([1, 2, 3, 4, 5])

class ArrayPooper {
  constructor(arr) {             //Constructor expects an array
    this.arr = arr;              //instance variable and stores value we pass in
    this.atBeginning = true;    //default variable. Boolean variable. Starts at the beginning of the array
  }                             //SO when we create a new Array Popper this keeps track of it. It will start at the beginning of the array. 
                               //Keeps track of position inside of array. Always starting at the beginning
  
  //create a togglePopper method, passing in no arguments
  togglePopper() {         
    this.atBeginning = !this.atBeginning; //! refers to opposite of atBeginning which is atEnd. Alternates the atBeginning value. This method when called will reverse the value each time.
    return this.atBeginning ? console.log(this.arr.pop()) : console.log(this.arr.shift());
  } // When togglePopper is called we want to return: 
    //return this.arr.pop() ...which returns very last element from the array. Which happens if atBeginning is true.
   //if that beginning is false return this.arr.shift(). Which returns first element from the array
}

const ap = new ArrayPopper([1, 2, 3, 4, 5,]);  

//When we initially call togglePopper the value returns 1. 
//It checks ArrayPopper and it starts as true
//Then calling togglePopper it checks this.atBeginning as sees it's false and skips ahead
//checks ternary operator conditions and goes to this.arr.shift(), to return very first value in array
//Continues switching back and forth everytime it goes through class and method
//Updates the array to
//[2, 3,  4, 5] and removes 1
//[2, 3, 4]         removes 5
//[3, 4]            removes 2
//[3]               removes 4
//                  removes 3

console.log(ap.togglePopper());
// [1, 2, 3, 4, 5,]
// return 1 
// return 5
// return 2
// return 4  
// return 3   

const string = new ArrayPopper(['Hi', 'my', 'name', 'is' 'Cian']);

string.togglePopper(); // Hi
string.togglePopper(); // Cian
string.togglePopper(); // my
string.togglePopper(); // is
string.togglePopper(); // name