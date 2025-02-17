// 77. Check if Array Contains 1 or 3

// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3. 

function contains(arr) {
    // if (arr[0] == 1 || arr[1] == 3 || arr[0] == 3 || arr[1] == 1) {
    //     return true;
    if (arr.includes(1) || arr.includes(3)) {
        return true;
    } else {
        return false;
    }
}

console.log(contains([1, 2]));
