// 76. Create Array with First/Last Elements from Array

// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.  

function newArr(arr) {
    let newArray = [arr[0], arr[arr.length - 1]];
    return newArray;
}

console.log(newArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
