Working with String Functions - Part 1

var str = 'The quick brown fox jumped over the lazy dog';

//Attribute of the String
str.length;
//not a function like in Python. In JS it's an attribute of the string object
//44

str.charAt(2);
//'e'
//Uses indexing. Grabs 'e' at the index of 2.

str.charAt(3);
//returns ' ' space at index of 3. '

str.charAt(200); //Calls index that doesn't exists
//Returns and empty string vs error or null so be aware of that

str.concat(' again and again');
//The quick brown fox jumped over the lazy dog again and again';
//Joins the argument to the sentence
//Only chnages value that got returned by calling function on it

const string = 'hello'
string[0] = string[0].toUpperCase()
console.log(string)
//Returns hello so but doesn't make the change bc it's immutable
//Can attach it to the console.log statement
console.log(string.toUpperCase()
//Makes the change

str.includes('quick');   // true -includes value

str.includes('foo');   // false -does not include value

str.startsWith('quick'); // false

str.endsWith('dog'); // true

str.endssWith('g'); // true

str.endsWith('lazy dog'); // true

Working with String Functions - Part 2

var str = 'The quick brown fox jumped over the lazy dog';

str.repeat(5);   
  /*
  "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"
  */

  //Regular Expression: A Pattern matching system

  '(555)555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
//A pattern matching system
//Googled reg expression for phone number
//It's asking if this patten match what's in the string
/*
Returns:
(4) ["(555)555-5555", "(555)", "(555)", undefined, index: 0, input: "(555)555-5555", groups: undefined]
0: "(555)555-5555"
1: "(555)"
2: "(555)"
3: undefined
groups: undefined
index: 0
input: "(555)555-5555"
length: 4
__proto__: Array(0)
*/

str.replace('fox', 'wolf');  
// "The quick brown wolf jumped over the lazy dog"
//Replaced 'fox' with 'wolf'


 555-555-5555 is my phone number.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/);
 //Finds it and returns the index value the pattern starts at. (Not the boolean of true or false)
// If -1 is returned it means it didn't find anything


 str.indexOf('jumped');  
//'The quick brown fox jumped over the lazy dog'  
// 20


 var str2 = str.concat(' again and again');
// 'The quick brown fox jumped over the lazy dog again and again'

 str2.indexOf('again');  
//'The quick brown fox jumped over the lazy dog again and again'
// 45


str2.lastIndexOf('again');
// 'The quick brown fox jumped over the lazy dog again and again'  
//  55

Working with String Functions - Part 3

str.slice(10);
//'The quick brown fox jumped over the lazy dog'
"brown fox jumped over the lazy dog"

//'The quick brown fox jumped over the lazy dog'
str.charAt(10);
"b". //slices character

str.slice(-8);
//'The quick brown fox jumped over the lazy dog'
"lazy dog"

//'The quick brown fox jumped over the lazy dog'
str.slice(4, 9);
"quick"

//Empty space in bewteen
var messyString = '    foo     ';
undefined

messyString.trim(); //Removes empty apace
'foo'

//'The quick brown fox jumped over the lazy dog'
str.slice(4, 10).trim();
"quick". //Removes extra space after quick

//'The quick brown fox jumped over the lazy dog'
str.toUpperCase();
"THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

//'The quick brown fox jumped over the lazy dog'
str.toLowerCase();
"the quick brown fox jumped over the lazy dog"