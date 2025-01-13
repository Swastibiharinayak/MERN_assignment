// 3. For Loop with Break and Continue
// Question: Create a loop that prints numbers from 1 to 10, skips 3, and stops when it reaches 6.

for (let index = 1; index <=10; index++) {
    const element = index;
    if (element == 3) {
        continue;
    }
    if (element == 6) {
        break;
    }
    console.log(element);
}
