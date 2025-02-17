// 39. Sum Two Integers and Return Based on Range

// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

function sumInRange(x,y) {
    sum = x + y
    if (sum >= 50 && sum <= 80) {
        console.log("65");
    } else {
        console.log("80");
    }
}

sumInRange(30, 35)
sumInRange(20, 55)
sumInRange(8, 10)
sumInRange(40, 50)
