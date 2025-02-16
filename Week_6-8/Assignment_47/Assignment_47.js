// 47. Write a JavaScript program to check whether a given number exists in the range 40..10000.

function inRange(num) {
    return num >= 40 && num <=10000;
}

console.log(inRange(45));
console.log(inRange(400000));
console.log(inRange(39));
