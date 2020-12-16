Overview of JavaScript Ternary Operator

//Ternary Op allows you to write a condtion on a single line
//Very important for real world front end applications
//For Ternary's you have to have the else block

<div className={hasPermission ? 'active' : 'disabled'}>
</div>
//If the question you are asking...true or false
/*
function ageVerification(age) {
    if (age > 25) {
        console.log('can rent a car');
    }   else {
        console.log('is not old enough yet');
    }
    */
//Avoid putting console log statements in operand statements
// condition1 ? condition2 ? if conditon2 is true : else condition2 or is false : else condition1 is false then do this

function ageVerification(age) {
  let answer = age > 25 ? "can rent a car" : "can't rent a car";
  console.log(answer);
      
}
ageVerification(15)
ageVerification(55)

//condition ? exprIfTrue : exprIfFalse

//New example
function adminControls(user) {
    if (user) {
        if (user.admin) {
            console.log('showing admin controls...');
        } else {
            console.log('you need to be an admin');
        }
    } else {
        console.log('you need to be logged in');
    }
}

let userOne = {
  name: 'Kristine',
  admin: 'true'
}

adminCOntrols(userOne);

let userTwo = {
  name: 'Tiffany',
  admin: 'false'
}

let userThree = {
  name: '',
  admin: ''
}

let response = user ? (user.admin ? "showing admin controls..." : "You need to be an admin") : "You need to be logged in";
console.log(response)