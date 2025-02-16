// 94. Find Most Frequent Number in Array

// Write a JavaScript program to find the number appearing most frequently in a given array of integers. 


function findMostFrequent(arr) {
    let maxCount = 0;
    let mostFrequent;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = arr[i];
        }
    }
    return mostFrequent;
}


console.log(findMostFrequent([10, 20, 30, 10, 20, 50, 20]));
