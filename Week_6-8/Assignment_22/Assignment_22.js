// 22. Remove Character at Specified Position in String

// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  



function removeChar(str, pos) {
    for (let i = 0; i < str.length; i++) {
        if (i === pos) {
            str = str.slice(0, i) + str.slice(i + 1);
        }
    }
    return str;
}

console.log(removeChar("hello", 2))
