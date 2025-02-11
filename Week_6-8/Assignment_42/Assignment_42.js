// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function increasing(x , y , z) {
    if (x < y && y < z) {
        console.log("Strictly increasing");
    } else if (x < z) {
        console.log("Softly increasing");
    } else {
        console.log("Not increasing");
    }
}

increasing(1, 2, 3)
increasing(1, 3, 2)
increasing(3, 2, 7)
increasing(7, 3, 6)
