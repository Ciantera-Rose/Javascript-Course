// toThhePowerOf(2,3) => 8
//reduce 

//2 * 2 = 4
//4 * 2 = 8
//2 * 2 * 2


const toThePowerOf = (num, exp) => {
  const items = Array(exp).fill(num);
  const reducer = (total, currentValue) => total * currentValue;
  return items.reduce(reducer);
}  

[2, 2, 2]
//total: 2
//curentValue: 2
//4

//total: 4
//currentValue: 2
//8

toThePowerOf(2, 3); //?8
toThePowerOf(3, 3); //?27
toThePowerOf(10, 120); //? 1.000000000000000006e+120
  
//Array(3).fill(2);//? [2, 2, 2 ] 
///----------------------------------------------

const manuelExponentReduce = (num, exp) => {
  const baseArr = num.toString().repeat(exp).split('')
  const reducer = (total, iter) => total * iter

  return baseArr.reduce(reducer)
}

//console.log(manuelExponentReduce(2,3))

//----------------------------------------
const manuelExponentWhile = (base, exp) => {
  let counter = exp - 1
  let total = base
}

  while (counter > 0) {
    total *= base
    counter--
  }

return total 

}
//console.log(manualExponentWHile(2,3))


const manuelExponentFor = (base, exp) => {
  let total = base

  for(let i = exp -1; i > 0; i --){
    total *= base
  }

  return total
}
//console.log(manualExponentFor(2,3))