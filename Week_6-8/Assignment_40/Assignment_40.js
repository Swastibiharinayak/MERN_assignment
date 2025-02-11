// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function eight(x,y) {
    if (x == 8 || y == 8 || x + y == 8 || Math.abs(x - y) == 8) {
        console.log(true);
    } else {
        console.log(false);
    }    
}

eight(8, 16)
eight(24, 16)
eight(24, 32)
eight(6, 2)
eight(6, 18)
