//JS Event Loop Deep Dive
//How to Loop Through a JavaScript Object Collection

//
var student = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale'
};



//var key is local to block
//Grab a value by the key by calling object and passing in with BRACKETS what the key is. 
for (var key in student) {
  console.log(key + " => " + student[key]);  // => Hash rocket
}
//Must use BRACKETS or values will return undefined, so instead of . notation use [key]
//'name => Kristine'
//age => 12'
//'city => Scottsdale'

