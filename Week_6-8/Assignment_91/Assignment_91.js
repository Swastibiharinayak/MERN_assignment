// 91. Find Max Sum of k Consecutive Numbers in Array

// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 


function kthSum(arr, k) {
    let result = [];
    let maxSum = 0;
    let maxSubArray = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let subArray = arr.slice(i, i + k);
        result.push(subArray);

        let sum = 0;
        for (let j = 0; j < subArray.length; j++) {
            sum += subArray[j];
        }

        if (sum > maxSum) {
            maxSum = sum;
            maxSubArray = subArray;
        }
    }

    console.log(`Sub-array with the largest sum: ${maxSubArray}, Largest sum: ${maxSum}`);
}


function kthSum1(arr, k) {
    arr.sort((a, b) => b - a);  // Sort in descending order
    let subArray = arr.slice(0, k);  // Take the first k elements
    let sum = 0;

    for (let i = 0; i < subArray.length; i++) {
        sum += subArray[i];  // Add each element to the sum
    }

    console.log(`Sub-array with the largest sum: ${subArray}, Largest sum: ${sum}`);
    return sum;
}



kthSum([62, 3, 22, 72, 17, 5], 3);
kthSum1([62, 3, 22, 72, 17, 5], 3);
