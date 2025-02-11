function addTwoDigits(num) {
    // return Math.floor(num / 10) + num % 10;

    let arr = num.toString().split("");
    return parseInt(arr[0]) + parseInt(arr[1]);

}

console.log(addTwoDigits(29));
