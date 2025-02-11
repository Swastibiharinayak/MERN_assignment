function divisible(num1 , num2 , divisor) {
    if (num1 % divisor == 0 && num2 % divisor == 0 || num1 % divisor !== 0 && num2 % divisor !== 0){
        return true;
    } else {
        return false;
    }
}

console.log(divisible(15 , 20 , 5));
console.log(divisible(15 , 21 , 3));
console.log(divisible(15 , 21 , 8));
console.log(divisible(15 , 24 , 4));
