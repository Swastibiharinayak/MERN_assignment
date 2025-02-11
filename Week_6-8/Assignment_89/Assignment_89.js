function checkArithmatic(num1 , num2 , result) {
    if (num1 + num2 == result) {
        console.log("$ = +");
    } else if (num1 - num2 == result) {
        console.log("$ = -");
    } else if (num1 * num2 == result) {
        console.log("$ = *");
    } else if (num1 / num2 == result) {
        console.log("$ = /");
    } else {
        console.log("error");
    }
}

checkArithmatic(10,20,200);
checkArithmatic(50,10,5);
checkArithmatic(10,5,5);
