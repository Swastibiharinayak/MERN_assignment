const date = new Date();

let day= date.getDay()

// let output = "Today is: "; 
// if (day === 0) {
//     console.log(output + "Sunday.");
// } else if (day === 1) {
//     console.log(output + "Monday.");
// } else if (day === 2) {
//     console.log(output + "Tuesday.");
// } else if (day === 3) {
//     console.log(output + "Wednesday.");
// } else if (day === 4) {
//     console.log(output + "Thursday.");
// } else if (day === 5) {
//     console.log(output + "Friday.");
// } else {
//     console.log(output + "Saturday.");
// }


let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is: " + weekdays[day] + ".");                        
 


let Seconds= date.getSeconds()
let Minutes= date.getMinutes()
let Hours= date.getHours()

if (Hours > 12) {
    Hours = Hours - 12;
    console.log("Current time is: " + Hours + " PM :" + Minutes + ":" + Seconds);
    
}else{
    console.log("Current time is: " + Hours + " AM :" + Minutes + ":" + Seconds);
}
