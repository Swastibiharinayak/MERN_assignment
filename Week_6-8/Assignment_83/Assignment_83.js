function longestStr(arr) {
    let longest = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
    
}

console.log(longestStr(["abc", "ab", "abcd", "abcde", "abcdef"]));
