// 8. High Order Array Loops (Reduce)
// Question: Write a program to find the sum of all numbers in the array [1, 2, 3, 4].

const MyArr = [1, 2, 3, 4]

let sum = MyArr.reduce( (acc,cv) => {
    return acc + cv 
}, 0)

console.log(sum)
