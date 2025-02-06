// Check Leap Year (Gregorian Calendar)

let year = 2000;

/**
 * as per the rule of leap year, if the year is divisible by 4, then it is a leap year.
 * if the year is divisible by 100, then it is not a leap year.
 * if the year is divisible by 400, then it is a leap year. 
 */

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a leap year.");
        } else {
            console.log(year + " is not a leap year.");
        }   
    } else {
        console.log(year + " is a leap year.");
    }
}
