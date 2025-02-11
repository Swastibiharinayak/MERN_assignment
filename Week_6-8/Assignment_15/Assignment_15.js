// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function difference(num){
    if (num <= 13){
        console.log(`Difference is: ${13 - num}`);
    } else {
        let diff = num - 13;
        console.log(`Difference is: ${diff}`);
        console.log(`Double the difference is: ${(diff) * 2}`);
    }
}

difference(5);
difference(22);
