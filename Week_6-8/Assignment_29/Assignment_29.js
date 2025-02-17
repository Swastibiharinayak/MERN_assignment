// 29. Check if Three Integers are in Range 50?99

// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.


function inRange(num1, num2, num3) {
    if (num1 >= 50 && num1 <= 99 && num2 >= 50 && num2 <= 99 && num3 >= 50 && num3 <= 99) {
        console.log("In between range")
    } else {
        console.log("outside the range")
    }
}
 inRange(55, 70, 65)
