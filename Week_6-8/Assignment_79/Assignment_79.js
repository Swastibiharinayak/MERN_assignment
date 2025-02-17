// 79. Check if Array Contains 30 and 40 Twice

// Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 

function containsTwice(arr) {
    if (arr[0] == 30 && arr[1] == 30 || arr[0] == 40 && arr[1] == 40) {
        return true;
    } else {
        return false;
    }
}

console.log(containsTwice([30, 30]));
console.log(containsTwice([30, 40]));
console.log(containsTwice([40, 40]));
