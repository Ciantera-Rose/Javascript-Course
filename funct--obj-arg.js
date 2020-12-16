//How to Pass JavaScript Objects as Function Arguments by Leveraging Deconstruction


const user = {
  name: 'Kristine',
  email: 'kristine@devcamp.com'
}

const renderUser = ({ name, email }) => {
  console.log(`${name}: ${email}`);
}

renderUser(user);
