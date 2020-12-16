//Introduction to JavaScript Promises
//Use to communicate with outside API's
//Allows us to call API, show our page and then when post arrives to API, show the post//Async nature

//Create new object
//creating a new instance of this promise
//storing it inside of sleepyGreeting
// promise takes two arguments
//first argument is resolves and second is reject
//PROMISE will either work or have some kind of error or issues. But you will get someting back
//Promises force you to spend 50/50 of your time if an error occurs or doesn;t occur. 


let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
//CAll resolve. Whatever is passed in Will run if promise is successful
    resolve('Hello....')
  }, 2000);
//If not successful
//Call reject which is second alternative. Throws error.  Error takes a function
  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

//then is a reserved word that a promise expects. Space to pretty syntax so you can see it belongs to sleepyGreeting
//then do everything in this code block
//In this case the data is the "Hello" string amd we expect access to it
//Then is mapped to resolve
sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
  //Catch is mapped to reject
  //What data is to then error is to catch
  //Reject will get called by default it it can't find a resolve