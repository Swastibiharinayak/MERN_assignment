// 75. Create Array with Middle Elements from Two Arrays

// Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.

function newArray(arr1,arr2) {
    let newArr = [];
    newArr.push(arr1[1],arr2[1]);
    return newArr;
}

console.log(newArray([1,2,3],[4,5,6]));
console.log(newArray([7,9,3],[5,7,8]));
