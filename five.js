//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.


function swapfirstLast(str){
    if(str.length<= 1){
        return str;
    }

    let first = str.charAt(0);
    let last = str.charAt(str.length-1);
    let middle = str.slice(1, -1);

    return last + middle + first;
}

console.log(swapfirstLast("Mother"));
console.log(swapfirstLast("fear"));
console.log(swapfirstLast("w"));
console.log(swapfirstLast("to"));




//strings must be enclosed in single or double quotes.
//use .slice for extracting part of a string.