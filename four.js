//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 

function checkFifty(a, b) {
   return a===50 || b===50  || (a+b)===50;
}

console.log(checkFifty(50, 40));
console.log(checkFifty(30, 50));
console.log(checkFifty(10, 40));
console.log(checkFifty(55, 40));
console.log(checkFifty(50, 90));