// Write a JavaScript program to calculate the days left before Christmas.

let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25);

// console.log(today);
// console.log(christmas);

let diff = christmas - today;
diff = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`${diff} days left before Christmas!`);
