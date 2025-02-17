// 32. Find Closest Value to 100 from Two Numbers

// Write a JavaScript program to find the closest value to 100 from two numerical values.



function closest(x, y) {
    let xdiff = Math.abs(x-100)
    let ydiff = Math.abs(y-100)

    if (xdiff < ydiff) {
        console.log(`${x} is closer`);
    } else {
        console.log(`${y} is closer`);
    }

}

closest(90, 95)
closest(150, 200)
closest(10, 110)
