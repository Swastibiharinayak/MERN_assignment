// 6. High Order Array Loops (Filter)
// Question: Filter out all numbers less than or equal to 3 from the array [1, 3, 5, 7, 2].

const arr= [1, 3, 5, 7, 2]

let nums = arr.filter( (val) => {
    return val > 3
} )

// let nums = arr.filter( (val) => val > 3 )

console.log(nums);
