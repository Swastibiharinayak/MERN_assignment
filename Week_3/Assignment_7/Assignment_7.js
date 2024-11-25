let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

let smallest = Math.min(...arr);
let largest = Math.max(...arr);

alert(`Smallest number: ${smallest}`);
alert(`Largest number: ${largest}`);
