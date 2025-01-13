let str = prompt("Enter a string:");

// alert(`Length of the string: ${str.length}`);

let length = 0;
for (let i = 0; str[i] !== undefined; i++) {
    length++;
}

alert(`Length of the string: ${length}`);
