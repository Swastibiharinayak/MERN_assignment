// 57. Create String of Specified Copies

// Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

function copy_String(str, n){
    if (n < 0)
        return false;
    else
        return str.repeat(n);
}
console.log(copy_String("Kick", 4));
