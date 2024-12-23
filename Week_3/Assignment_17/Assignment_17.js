function filterEven(arr) {
    let evenNums = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNums.push(num);
        }
    }
    return evenNums;
}
console.log(filterEven([11, 3, 4, 8, 10, 33, 2, 6]));
