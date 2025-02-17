// 100. Check if Arrays Share at Least One Common Element

// Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers. 

function common(Arr1, Arr2) {
    for (let i = 0; i < Arr1.length; i++) {
        for (let j = 0; j < Arr2.length; j++) {
            if (Arr1[i] === Arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(common([1, 2, 3], [3, 4, 5]));
console.log(common([1, 2, 3], [6, 4, 5]));
