let myString = prompt("Enter a string:");
let reversed = myString.split('').reverse().join('');

if (myString === reversed) {
    alert(`"${myString}" is a palindrome.`);
} else {
    alert(`"${myString}" is not a palindrome.`);
}
