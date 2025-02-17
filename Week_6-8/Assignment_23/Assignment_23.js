// 23. Swap First and Last Characters in String

// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  



function swapFirstLast(str) {

    let firstChar = str[0];

    let lastChar = str[str.length - 1];

    let midChars = str.slice(1, str.length - 1);

    let newStr = lastChar + midChars + firstChar;

    console.log(newStr);

}

swapFirstLast("hello");
