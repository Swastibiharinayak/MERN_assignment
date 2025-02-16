// 95. Replace Numbers with Specified Value in Array

// Write a JavaScript program to replace all numbers with a specified number in an array of integers. 


function replaceElements(arr, present, replace) {
    console.log(`Given array: ${arr}`);
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === present) {
            arr[i] = replace
        }
    }
    console.log(arr);
    
}


replaceElements([1,2,5,6,3,4,6,7,6],6,9)
