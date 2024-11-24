let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
alert(`Sum of numbers: ${sum}`);
