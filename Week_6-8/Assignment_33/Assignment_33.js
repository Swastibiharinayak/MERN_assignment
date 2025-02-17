// 33. Check if Two Numbers are in Specific Ranges

// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.


function inRange(x,y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60 || x >= 70 && x <= 100 && y >= 70 && y <= 100) {
        console.log("In between range");
    } else {
        console.log("Out side the range");
    }
}


inRange(44,55)
inRange(72,95)
inRange(42,91)
