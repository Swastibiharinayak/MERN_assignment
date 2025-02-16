// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function rightMost(x, y, z) {
    if (x % 10 == y % 10 && x % 10 == z % 10) {
        console.log("True");
    } else if (x % 10 == y % 10 || x % 10 == z % 10 || y % 10 == z % 10) {
        console.log("True");
    } else {
        console.log("False");
    }
}

rightMost(73, 19, 55)
rightMost(23, 53, 13)
rightMost(23, 53, 15)
