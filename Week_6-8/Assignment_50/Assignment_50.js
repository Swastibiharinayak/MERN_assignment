// Write a JavaScript program to capitalize the first letter of each word in a given string. 

function capitalize(myStr) {
    let words = myStr.split(' ');

    let newStr = '';
    for (let i = 0; i < words.length; i++) {
        newStr += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
    }
    return newStr;
}

console.log(capitalize('hello world'));
