let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

let sum = 0;
for (let i = 0; i < 5; i++) {
    sum = sum + numbers[i]; 
}

alert(`Sum of numbers: ${sum}`);
