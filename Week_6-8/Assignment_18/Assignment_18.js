function fifty(num1,num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    }else {
        return false;
    }
}

console.log(fifty(50, 50));
console.log(fifty(25, 50));
console.log(fifty(20, 30));
console.log(fifty(20, 20));
