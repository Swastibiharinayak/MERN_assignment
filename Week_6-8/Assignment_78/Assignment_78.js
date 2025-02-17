// 78. Check if Array Does Not Contain 1 or 3

// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

function notInclude(arr) {
    if (arr[0] == 1 || arr[1] == 3 || arr[0] == 3 || arr[1] == 1) {
        return false;
    }
    // if (arr.includes(1) && arr.includes(3)) {
    //     return false;
    else {
        return true;
    }
}

console.log(notInclude([1, 2]));
