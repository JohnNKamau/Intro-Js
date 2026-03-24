//Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

function difference(num) {
    if (num > 13) {
        return (num-13)*2;
    } else {
        return  13-num;
    }
}

console.log (difference (20));  //7
console.log (difference (7));  //6