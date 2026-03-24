//Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

let students = [
  { name: "Jane", marks: 80 },
  { name: "Ciara", marks: 77 },
  { name: "Smith", marks: 88 },
  { name: "Thomas", marks: 95 },
  { name: "Shelby", marks: 68 }
];

let sum = 0;

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name + ": " + students[i].marks);
  sum += students[i].marks;
}


let average = sum / students.length;


let grade;

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("\nAverage Marks: " + average);
console.log("Overall Grade: " + grade);