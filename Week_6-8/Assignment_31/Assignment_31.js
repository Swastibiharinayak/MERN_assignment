// 31. Find Largest of Three Integers

// Write a JavaScript program to find the largest of three given integers.


function largest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1)
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2)
    } else {
        console.log(num3)
    }
}

// function largest(num1, num2, num3) {
//     if (num1 > num2){
//         if (num1 > num3){
//             console.log(num1)
//         } else {
//             console.log(num3)
//         }
//     } else {
//         if (num2 > num3){
//             console.log(num2)
//         } else {
//             console.log(num3)
//         }
//     }
// }

largest(55, 70, 65)
