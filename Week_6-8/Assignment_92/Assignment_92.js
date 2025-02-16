// 92. Find Max Difference Between Adjacent Elements

// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers. 


function maxAdjacent(arr) {
    let max = 0;
    let temp;

    for (let i = 0; i < arr.length - 1; i++) {
        temp = Math.abs(arr[i]-arr[i+1]);
        if (max <= temp) {
            max = temp
        }
        // max = Math.max(max,temp);
    }

    console.log(max);
}

maxAdjacent([62, 3, 22, 72, 17, 5]);
