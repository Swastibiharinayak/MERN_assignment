let arr = [];
for (let i=0; i<5; i++){
    arr.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}
let value = parseInt(prompt("Value to search:"));
let index = arr.indexOf(value);

if (index !== -1) {
    alert(` Index of ${value}: ${index}`);
} else {
    alert(`${value} not found in the array.`);
}
