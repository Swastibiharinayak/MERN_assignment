// 96. Sum of Absolute Differences of Consecutive Numbers

// Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers. 


function absoluteDiff(arr) {
    let diff = 0;
    for (let i = 0; i < arr.length-1; i++) {
        diff += Math.abs(arr[i] - arr[i+1]);
    }
    console.log(diff);
}

absoluteDiff([1, 2, 3, 7, -5])
