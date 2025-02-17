// 110. Count Evens Before First Occurrence of Number

// Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

function evenBeforeGiven(arr, givenNumber) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === givenNumber) {
            break;
        }
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(evenBeforeGiven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],7));
