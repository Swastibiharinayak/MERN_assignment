// 37. Modify String Based on Length (First 3 Lowercase/Uppercase)

// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.


function firstThree(str) {
    if (str.length >= 3) {
        firstPart = str.substring(0, 3).toLowerCase();
        secondPart = str.substring(3, str.length);
        return firstPart + secondPart;
    } else {
        return str.toUpperCase();
    }
}

console.log(firstThree('abDYECJHV'));
console.log(firstThree('ab'));
console.log(firstThree('SWASTI'));
