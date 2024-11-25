let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}
let reversed = arr.reverse();


alert(`Reversed array: ${reversed}`);
