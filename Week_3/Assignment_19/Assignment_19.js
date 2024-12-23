function arraySum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(arraySum([50, 25, 46, 17]));
