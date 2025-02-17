// 21. Add 'Py' to Start of String if Not Present

// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  


function startsPy(word) {
    Py = word.startsWith("py");
    if (Py) {
        return true;
    } else {
        Py = "py" + word;
        return Py;
    }
}

console.log(startsPy("python"));
console.log(startsPy("swasti"));
