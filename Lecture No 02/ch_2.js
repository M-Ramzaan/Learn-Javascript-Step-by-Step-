//How to comment
/*console.log("Hello World")
sdfsdfsdf*/
/*Operators in JS
1-Arithmatic Operators
let a = 5
let b = 2

console.log("a = " , a, " & b =", b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);*/

/*Modulus Operator = %
console.log("a%b=",a%b);*/

/*Exponential Operator = **
console.log("a**b=",a**b);*/

/*Urinary Operator
let a = 5
let b = 2
Increment Operator = ++ (Increase by 1)
a++;
console.log("a=",a);
Type of Increment Operator
Post a++ = Value change in next line
Pre ++a = Value chnage in current line
console.log("a =", a, "& b =", b);
a++,
console.log("++a=",++a);//6
console.log("a++=", a++);//5
console.log("a", a);//6

console.log("++a=", ++a);//7*/

/*Decrement Operator = -- (Decrease by 1)
a--;
console.log("a=",a);
Post a-- = Value change in next line
Pre --a = Value chnage in current line
console.log("a--=", a--);//6
console.log("a", a);//5
console.log("--a=", --a);//6*/

/*Assignment Operators
let a = 5
let b = 2

a += 4 //a = a+4
console.log("a = ",a);
a -= 4 //a = a-4
console.log("a = ",a);
a *= 4 //a = a*4
console.log("a = ",a);
a /= 4 //a = a/4
console.log("a = ",a);
a %= 4 //a = a%4
console.log("a = ",a);
a **= 4 //a = a**4
console.log("a = ",a);*/

/*Comparison Operators
let a = 5
let b = 3

//Equal to ==
//console.log("a == b =",a==b);

//Not Equal to !=
//console.log("a != b =",a!=b);

//Strict version of Equal to === Also compare Data Type
//console.log("a === b =",a===b);

//Strict version of Not Equal to === Also compare Data Type
//console.log("a !== b =",a!==b);

//More Comparison Operators >, >=, <, <=
//console.log("a > b =",a > b);
//console.log("a < b =",a < b);
console.log("a <= b =",a <= b);
console.log("a >= b =",a >= b);*/

//Logical Operators
//Logic And && (Both Conditions should be true))
//let a = 6
//let b = 5
//One way to do that
//let cond1 = a > b
//let cond2 = a === 6
//console.log("cond1 && cond2 =", cond1 && cond2);
//Second Way to do That
//onsole.log("cond1 && cond2 =", a > b && a === 6);

/*Logic Or (One Conditions should be true))
let a = 6
let b = 5
//One way to do that
let cond1 = a > b
let cond2 = a === b
console.log("cond1 && cond2 =", cond1 || cond2);
//Second Way to do That
//onsole.log("cond1 && cond2 =", a > b && a === 6);*/

/*Logic Not (Make true condition false and False condition to true))
let a = 6
let b = 5
console.log("!(a>b)=", !(a > b));*/

/*Conditional Statements

1-If Statement

let age = 16
if (age >= 18) {
  console.log("You can vote")
}
if (age < 18) {
  console.log("You cannot vote")
}*/
/*
let mode = "Light"
if (mode === "Dark") {
  color = "Black";
}

if (mode === "Light") {
  color = "White";
}
console.log(color);*/

/*2-If Else Statement

let mode = "Dark"
if (mode === "Dark") {
  color = "Black";
} else {
  color = "White";
}
console.log(color); 

let age = 16
if (age >= 18) {
  console.log("You can Vote")
} else {
  console.log("You cannot Vote")
}*/

/*3-Even or Odd Numbers
let num = 9
if (num % 2 === 0){
  console.log(num, "is an Even Number")
} else {
  console.log(num,"is an Odd Number")
}*/

/*4-Else if statement

let age = 19;
if (age < 18){
  console.log("junior");
} else if (age > 60){
  console.log("senior");
} else {
  console.log("middle");
}

let mode = "silver";
let color;
if (mode === "dark"){
  color = "black";
} else if (mode === "pink"){
  color = "pink";
} else if (mode === "blue"){
  color = "blue";
} else {
  color = "white";
}
console.log(color);*/

/*5-Ternary Operators

let age = 17;
//let result = age >= 18 ? "adult" : "not adult"
//console.log(result);
age >= 18 ? console.log("adult") : console.log("not adult");
console.log;*/

/*Practice Question
let score = prompt("Enter your score (0-100):");
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log("As per your score your grade was =",grade);*/
