// 90. Find kth Greatest Element in Array

// Write a JavaScript program to find the kth greatest element in a given array of integers.  


function kthGreatest(arr, k) {
    arr.sort((a, b) => b - a);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (k == i+1) {
            console.log(`${k}'th greatest element is ${arr[i]}`);
        }
    }
}

kthGreatest([34, 7, 23, 32, 5, 62],3);
