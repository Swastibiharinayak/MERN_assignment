// 52. Sort Letters Alphabetically in String

// Write a JavaScript program to convert letters of a given string alphabetically. 

function alphabet_Soup(str) { 
    let str1 = str.split("");
    return str1.sort().join("");
}

console.log(alphabet_Soup('hello World'));
