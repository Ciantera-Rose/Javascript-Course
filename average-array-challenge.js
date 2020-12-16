//How to Get the Average from an Array in JavaScript
//Sum the values from the array
//Divide the length of the array
//Divide the array sum by the length
// ie. [1, 2, 3];

//sum of all the elements divided by the total elements in the list


const getAverage = arr => {
//Sum the values from the array
const reducer = total, currentValue) => total + currentValue;
const sum = arr.reduce(reducer);
return sum;
}

getAverage([1, 2, 3, 4, 5]);// 15
//total: 0
//currentValue: 1
//1

//Reduces iterates throughh enitre collection

//total: 1
//currentValue: 2
//Return value: 3

//total: 3
//currentValue: 2
//Return value: 

return sum / arr.length;
//get the length of the arra
//divide the array sum by the length
getAverage([1, 2, 3, 4, 5]);// 15
//----------------------------------------------------------------------------------
//Another Solution 
const reduce = (array, reducer) => {
  total= array[0]

  array.sliceforEach(item => {
    total = reducer(item, total)
  })
  return total
}
console.log(reduce[1,2,3].reduce(x+y) => x + y))


//Another Solution 
[1,2,3].forEach(item => )
const forEach = (arr, callBack) => {
  for (let i = 0; i < arr.length; i++){
    callBack(arr[i])
  }
}

//Another Solution 
const eachValue = forEach([1, 2, 3], item => console.log(item))
console.log(eachValue)


//Another Solution 
//[1, 2, 3];
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    }, initialValue)

console.log(sum/3) // logs 2