// 25. Check if Number is Multiple of 3 or 7

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.


function multiple(i) {
    if (i % 3 === 0 || i % 7 === 0) {
        console.log(`${i} is multiple of 3 or 7`);
    }else{
        console.log(`${i} is not multiple of 3 or 7`);
    
    }
}
multiple(9);

