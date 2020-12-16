//Introduction to Async and Await in JavaScript
// user logins to system
//when that happens we want x to occur
//verify credentials
  //redirect to dashboard page
     //update the db account
        //API calls to bring user data...
          // .......
//Writing functions with conditionals to see if data was resolved. Avoid callback hell
//Aync and Await all ow us to dictate this process in a much more dynmaic format

//Combine promises with Async and Await

const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('User logged in...');
    }, 2000);
  });
}

const updateAccount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Updating last login...')
    }, 2000);
  });
}

 async function loginActivities() {
   const returnedLogin = await login();
   console.log(returnedLogin);
 }
  
  const returnedUpdateAccount = await updateAccount();
  console.log(returnedUpdatedAccount);
 }
  
 loginActivities();


const sleep = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))
async function runLoop(){
  const arr = ["a", "b'","c", "d"]
  for (let i = 0 ; i < arr.length; i++){
    await sleep(1000)
    console.log(arr[i])
  }
}
runLoop()

//-----------------------------------------------------------------
//Using Async / Await for Communicating with Outside APIs in JavaScript

//Leverage Closures
//Function that can be 
//Passing in outputs.
async function queryApis() {
  const postsPromise = fetch('https://api.dailysmarty.com/posts');
}



//------------------------------------------------------------------
//Using Async / Await for Communicating with Outside APIs in JavaScript

//https://github.com/Ciantera-Rose?tab=repositories
async function repoGetter () {
  const gitFetch = fetch("https://api.github.com/users/Ciantera-Rose/repos")
  const gitData = await gitFetch.then(res => res.json())
  
  console.log(gitData)
 } 

gitGetter = async () => {
  const gitFetch = fetch("https://api.github.com/users/Ciantera-Rose/repos")
  const gitData = await gitFetch.then(res => res.json())
  
  console.log(gitData)
}

repoGetter()
gitGetter()