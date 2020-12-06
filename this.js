//Introduction to the 'this' Keyword in JavaScript
//this powerful word in Javascript and can look for  specificity in sets of values
//Jquery is layer on top of Javascript

//Building a listener that is waiting for an event to happen aka EVENT LISTENER
$('.btn-guide').click(function(event) {
    event.preventDefault();
    console.log($(this));
});

//How to Use the 'this' Keyword in JavaScript Programs
//Use 'this' in pure Vanilla Javascript
//References specfic instance of an object


//Using 'this'
//Commonly used inside of objects
//Example Authorization Engine

//Onject guide with key value pairs with methods inside of object
var guide = {
  title: 'Guide to Programming',
  content: 'Content goes here...',
  visibleToUser: function (viewingUserRole) {
    if (viewingUserRole === 'paid') {
      return true;
    }
  },
  renderContent: function(userRole) {
    if (this.visibleToUser(userRole)) {.  //Referencing 'this' objects visibleToUser method vs all potential global objects
      console.log(this.title + " - " + this.content);
    } else {
      this.content = '';
      console.log(this.title + " - " + this.content);
    }
  }
}

user = { role: 'paid' };
guide.renderContent(user.role);