// 7. High Order Array Loops (Map)
// Question: Write a program that adds 2 to each number in the array [2, 4, 6].

const myNums = [2, 4, 6]

const val = myNums.map( (nums) => {
    return nums + 2 
})
console.log(val);
