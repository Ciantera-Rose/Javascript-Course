//Object Oriented Programming in JavaScript Section Introduction
//A class is like our blueprint. Like a list of definitions for how the class show behave
//Instantiation: Taking that blueprint and creating a real world object with it. 


//Guide to JavaScript OOP Instance Methods
//Instance methods are a way of adding behavior to classses as functions
//Classes are made up of all kinds of things. 
//A lot of overalap in JavaScript
//Everything is an object in JavaScript

//Build in constructor function
//It's role is to run all of the processes you want everytime a new Instructor is created (this example)
//Constructor is a reserved keyword 
class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

//A class by itself is a bluprint. It gives us a set of rules and guidelines
//We need to tell the class I want to go and create something using your blueprint

//Instance method: with no arguments
//Gives is access to values in constructor blueprint
//'this' but be used to reference the values
  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
}

//Jon is an object and an instance of the Instructor class
const jon = new Instructor({name: 'Jon Snow'});
jon.renderDetails(); //"Jon Snow: assistant"
console.log(jon.name) // "Jon Snow"

const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
brayden.renderDetails(); //

//----------------------------------------
//Guide to OOP Static Methods in JavaScript

static helloWorld() {
  console.log('Hi there');
}

Instructor.helloWorld();  //"Hi there"
let jon = new Instructor({ 'name': 'Jon' });
jon.helloWorld();
//Static methods do not require objects to work. 
//They do not require instances and instances won't even  work.
//Static methods must be called on the class itself


//SIngle responsibility principle
//A class should only have a single responsibility and needs to do one thing

//Static method that could be used in this case

static canTeach(instructor) {
  return (instructor.role === 'classroom');
}

let jon = new Instructor({ 'name': 'Jon' };
console.log(
  `${jon.name} can teach; ${Instructor.canTeach(jon))}`
);       //"Jon can teach: false"


let alice = new Instructor({ 'name': 'Alice', 'role' : 'classroom' });
console.log(
 `${alice.name} can teach; ${Instructor.canTeach(alice)}`
);
// "Jon can teach: false"
// "Alice can teach: true"
