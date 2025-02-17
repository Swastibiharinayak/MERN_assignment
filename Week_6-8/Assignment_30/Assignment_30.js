// 30. Remove 'Script' from String at 5th Position

// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.



function checkStr(str) {
    if (str.substring(4,10) == "script") {
        console.log(str.slice(0,4))
    } else {
        console.log(str)
    }
}


checkStr("Javascript")
checkStr("Nodesscript")
