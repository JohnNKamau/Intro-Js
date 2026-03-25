//Write a JavaScript program to check whether all the digits in a given number are the same or not.

function allDigitsSame(num) {
    let lastDigit = num % 10; 

    while (num > 0) {
        if (num % 10 !== lastDigit) {
            return false;
        }
        num = Math.floor(num / 10);
    }

    return true;
}


console.log(allDigitsSame(1111)); 
console.log(allDigitsSame(1234)); 