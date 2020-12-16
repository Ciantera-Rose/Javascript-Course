//Guide to JavaScript Bind Function
//Usually we would have to do this:
constructor(){
    this.handleClick = handleClick.bind(this);
}


//We want to be able to inject and bind our functions togetehr
const userOne = {
    firstName: "Kristine",
    lastName: "Hudgens"
}

const userTwo = {
    firstName: "Tiffany",
    lastName: "Hudgens"
}

const fullName = function() {
    return '${this.lastName}, ${this.firstName}';
}

// Nope!
// const fullName = () => {
//   return `${this.lastName}, ${this.firstName}`;
// };

const kristine = fullName.bind(userOne);
const tiffany = fullName.bind(userTwo);

kristine(); //Hudgens, Kristine
tiffany(); //Hudgens, Tiffany