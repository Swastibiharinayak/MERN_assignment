// 28. Check if Two Integers are in Range 50?99

// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.



// let num = 55
// console.log(num)

function inRange(num1, num2) {
    if (num1 >= 50 && num1 <= 99 && num2 >= 50 && num2 <= 99) {
        console.log("In between range")
    } else {
        console.log("outside the range")
    }
}
 inRange(55, 100)
