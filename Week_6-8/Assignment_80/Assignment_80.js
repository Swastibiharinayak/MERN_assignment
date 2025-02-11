function swap(arr) {
    // let first = arr[0];
    // let last = arr[arr.length - 1];
    // arr[0] = last;
    // arr[arr.length - 1] = first;

    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
    return arr;
}

console.log(swap([1, 2, 3, 4, 5]));
