// 9. Combining Filter and Map
// Question: Filter numbers greater than 5 from [4, 6, 8, 3] and then double them.

const myArr = [4, 6, 8, 3]

let val= myArr.filter( (num) => num>5 ).map((num) => num * 2)

console.log(val)
