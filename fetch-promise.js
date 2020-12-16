//Using a fetch Promise to Communicate with APIs in JavaScript

//store promise inside const variable

//fetch has promise implemented inside of it
const postsPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After fetch call');
console.log(postsPromise);
console.log('After program has run');

//The promise by itself gives a promise object then you have to tell promsie wha you want it to do
//We want to call API without stopping dataflow for the rest of our application. Store it in promise and when data comes back you can show it in your screen

//Can apply multiple to same object
postsPromise
  .then(data => data.json()); 
  .then(data => {
   data.posts.forEach((item) => {  //Parse json data
     console.log(item.title);    //referes to returned json formatted version
    }) 
  }) 
  .catch((err) => {
    console.log(err);
  })


  //Brings back response data from the fetch call
  //fetch can be used with any type of data
  //so must define that it's json data so we can work with it...another then for what we want to do with it
  //Then parse through the data posts

  postsPromise
  .then(data => data.json()); 
  .then(data => {
   data.posts.forEach((item) => {  
     console.log(item.url_for_post); 
    }) 
  }) 