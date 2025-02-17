// 36. Check if Last Digit of Three Integers is Same

// Write a JavaScript program that checks whether the last digit of three positive integers is the same.



function lastDigit(x,y,z) {
    if (x % 10 == y % 10 && x % 10 == z % 10) {
        console.log("True");
    } else {
        console.log("False");
    }
}

lastDigit(73, 19, 55)
lastDigit(23, 53, 13)
