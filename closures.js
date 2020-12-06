
Introduction to JavaScript Closures//
//A pattern. Like a expression but using objects vs variables

//Function Declaration that takes in no arguments with variable objects
function battingAverage () {
  var hits = 100;   //LOCAL VARIABLES to battingAverage
  var atBats = 300;
 
 //CLOSURES to give more dynamic behavior to program
 /*
 CLOSURES are being able to wrap up an entire set of behavior, usually wrapped up in a function,
 and BEING able to use that, pass it around and call it however you need to
  */


//2 Closures
//One gets current battingAverage. Performs some action, set some values
//One that updatesHits and Bats. Returns value back

//Return a javascript Object that contains two closures
  return { 
    getCurrentAverage: function () { //Function expression/Anoynomous Function
      return (hits/atBats);
    },
    updateHitsAndAtBats: function (hit, atBat) { //Function expression passing in arguments
      hits += hit;  //Increments local varable and increments by 1
      atBats += atBat;  //Increments other local varable and increments by 1
    }
 /*
When you have an object and some functions declared inside Javascript Object,
those functions are called METHODS, in this case get CurrentAverage and UpdateHitsandBats
*/
  

  //NEW INSTANCE of battingAverage() function that returns an object 
  //So we can use Obj. traversal to call it like a normal object attribute
  var altuve = battingAverage();
  console.log(altuve.getCurrentAverage());
  // 0.3333333333333
  altuve.updateHitsAndAtBats(0, 20);
  console.log(altuve.getCurrentAverage());
  //0.3152
}

//Here the state was maintained by storing all of this in the altuve variable
//Ecommerence Cart example