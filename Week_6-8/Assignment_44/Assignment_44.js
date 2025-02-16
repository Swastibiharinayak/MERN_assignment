// 44. Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two. 

function tweenty(a,b,c) {
    if (a >= 20 && (a < b || a < c)){
        console.log(`${a} is greater than or equal to 20 and less than ${b} or less than ${c}`);
    } else if (b >= 20 && (b < a || b < c)){
        console.log(`${b} is greater than or equal to 20 and less than ${a} or less than ${c}`);
    } else if (c >= 20 && (c < a || c < b)){
        console.log(`${c} is greater than or equal to 20 and less than ${a} or less than ${b}`);
    } else {
        console.log("None of the numbers are greater than or equal to 20 or less than the other two numbers");
    }
}  

tweenty(20, 30, 40)
tweenty(80, 60, 30)
tweenty(10, 19, 45)
tweenty(3, 4, 7)
