// 34. Find Larger Number in Range 40?60

// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.


function largerInRange(x,y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60){
        let msg = "In between range"
        if (x > y) {
            console.log(`${msg} & ${x} is larger`);
        } else {
            console.log(`${msg} & ${y} is larger`);
        }
    } else {
        console.log("Out side the range");
    }
}

largerInRange(44,55)
largerInRange(72,95)
