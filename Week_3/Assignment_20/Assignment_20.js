function replaceWord(str, target, replacement) {
    return str.split(target).join(replacement);
}

console.log(replaceWord("I love JavaScript. JavaScript is awesome.", "JavaScript", "Python"));
