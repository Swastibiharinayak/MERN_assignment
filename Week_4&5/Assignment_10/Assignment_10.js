// 10. Loop with Conditional
// Question: Write a loop that prints "Fizz" for numbers divisible by 3 and "Buzz" for numbers divisible by 5 from 1 to 10.

for (let index = 1; index <= 10; index++) {
    const element = index;

    fizz= element % 3
    buzz= element % 5
    
    
    if (fizz==0) {
        console.log("Fizz")
    }else if(buzz==0){
        console.log("Buzz")
    }
    else{
        console.log(element)
    }
    
}
