//Write a JavaScript program to find the largest of three given integers

let a = 10;
let b = 20;
let c = 30;

let largest;

if (a >= b && a>=c){
    largest = a;
} else if (b>=a && b>=c){
    largest = b;
} else {
    largest = c;
}

console.log("the largest is:" +largest);