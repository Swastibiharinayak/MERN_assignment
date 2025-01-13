// 2. Control Flow
// Question: Write a program that determines whether a number is even or odd using an if-else statement.

function Odd_even () {
    let num = parseInt(prompt("Enter a number: "));

    let val = num % 2;
    if (val === 0) {
       alert("It's even number");
    }else{
        alert("It's odd number");
    }
}

Odd_even()
