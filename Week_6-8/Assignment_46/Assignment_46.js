// 46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

function checkMultiple(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'Please enter non-negative integers';
    }
    return (num1 % 7 === 0 && num2 % 11 === 0) || (num1 % 11 === 0 && num2 % 7 === 0);
}

console.log(checkMultiple(14, 22));
console.log(checkMultiple(14, 21));
console.log(checkMultiple(-10, 20));
