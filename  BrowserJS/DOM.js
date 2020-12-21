//Overview of the DOM

//user Object
const user = {
    name: 'Kristine',
    email: 'kristine@devcamp.com',
    favorites: [
      'Chipotle',
      'Chik fil a'
    ]
  }

  user.email
user.favorites[1]

document

document.location.href

// On dailysmarty.com
document.location.protocol

// On wsj
document.location.protocol

document.body.parentElement

document.getElementsByClassName('topics') //Returns array collecttion

document.getElementsByClassName('topics')[2] //Returns a div

document.getElementsByClassName('topics')[2].children //Returns nested collection with two elements

document.getElementsByClassName('topics')[2].children.length 

document.getElementsByClassName('topics')[2].children[0].text