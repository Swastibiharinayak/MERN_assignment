let fullDate = new Date();

let month = fullDate.getMonth() + 1;
let date = fullDate.getDate();
let year = fullDate.getFullYear();

if (month < 10 && date < 10) {
    month = `0${month}`;
    date = `0${date}`;
}
console.log(`${month}/${date}/${year}`);
console.log(`${date}/${month}/${year}`);
