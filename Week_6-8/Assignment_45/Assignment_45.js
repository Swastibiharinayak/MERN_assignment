// 45.Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

function fifteen(x,y) {
    if (x == 15 || y == 15 || x + y == 15 || x - y == 15 || y - x == 15) {
        return true;
    } else {
        return false;
    }
}


console.log(fifteen(15, 9));
console.log(fifteen(9, 15));
console.log(fifteen(7, 8));
console.log(fifteen(25, 10));
console.log(fifteen(5, 5));
