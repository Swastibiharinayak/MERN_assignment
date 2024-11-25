let arr = [];
for(let i=1; i<=5; i++) {
        arr.push(parseInt(prompt(`Enter number ${i}:`)))
}

let ascending = [...arr].sort((a, b) => a - b);
let descending = [...arr].sort((a, b) => b - a);

alert(`Ascending order: ${ascending}`);
alert(`Descending order: ${descending}`);
