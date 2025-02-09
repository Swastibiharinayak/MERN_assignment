function nextAlphabet(str) {
    let alphabets = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    let result = "";

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < alphabets.length; j++) {
            if (str[i] === alphabets[j]) {
                let nextIndex = (j + 1) % alphabets.length;
                result += alphabets[nextIndex];
                break;
            }
        }
      }

    return result;
}

console.log(nextAlphabet("swasti"));
console.log(nextAlphabet("Hello!"));
