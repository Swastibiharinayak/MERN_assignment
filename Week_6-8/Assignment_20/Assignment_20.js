// 20. Check if One Integer is Positive and One is Negative

// Write a JavaScript program to check two given integers whether one is positive and another one is negative.  


function check(num1, num2) {
    if (num1 < 0 && num2 >= 0) {
        return `${num1} is negetive and ${num2} is positive`;
    } else if (num1 >= 0 && num2 < 0) {
        return `${num1} is positive and ${num2} is negetive`;
    } else {
        return "Both are positive or negetive";
    }
}

console.log(check(0, 0));
console.log(check(0, -1));
console.log(check(-1, 0));
console.log(check(-1, -1));
