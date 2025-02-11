function sumOf(myArr) {
    let firstSum = 0 ;
    let secondSum = 0;

    for (let i = 0; i < myArr.length; i++) {
        if (i % 2 == 0) {
            firstSum += myArr[i];
        } else {
            secondSum += myArr[i];
        }    
    }
    return [firstSum, secondSum];
}

console.log(sumOf([1,3,6,2,5,10]));
