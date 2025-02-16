// 93. Find Max Difference Among All Pairs in Array

// Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 


function maxDiff(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let diff = arr [i] - arr [j]
            if (diff >= max) {
                max = diff
            }
        }
        
    }
    return max
}

console.log(maxDiff([10,2,5,9]));

// meaning of this "for(var k = 0; k !== i && k < arr.length; k++)" in solution
