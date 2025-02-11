// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function check(x,y,z) {
    if (x == y && x == z) {
        console.log(30);
    } else if (x == y || x == z || y == z) {
        console.log(40);
    } else {
        console.log(20);
    }
}

check(10,10,10)
check(10,10,20)
check(10,20,30)
