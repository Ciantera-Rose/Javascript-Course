//title
//type of heading

//headingGenerator('Hi there', 1) <h1>Hi there</h1>

function headingGenerator(title, type) {
  return `<h${type}>${title}</h${type}>`
}
  console.log(headingGenerator('greetings', 1))

  //---------------------------------------
  remove By Index(['a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) => ['b', 'f']

const array = (['a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) 

console.log(array.length)
