let arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

// let reversed = arr.reverse();

let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed[reversed.length] = arr[i];
}

alert(`Reversed array: ${reversed}`);
