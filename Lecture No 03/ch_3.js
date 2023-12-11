/*Loops and Strings
//count=1; (Initializer statement)
//count=<=5; (Stoping Statement)
//count++; (Updation Statement)
for (count = 1; count <= 5; count++) {
  console.log("Ramzan Akram");
}*/

/*Example 01 Calculate 1 to n numbers (Loop)
let sum = 0;
let n = 100
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("sum =", sum);
for (i = 1; i <= 5; i++) {
  console.log("i = ", i);
}*/

/*Infinite Loop
//Infinite loop is never ending loop its stoping condition is never end.
//Example that we never run
for (i = 1; i >= 0; i++){
  console.log("i = ", i);
}*/

/*While Loop (Same work can be donw with while loop that we do with the for loop but the syntax is little bit diffrent)
let i = 1;
while (i <= 10) {
  console.log("i = ", i);
  i++;
}*/

/*Do while loop
let i = 1;
do {
  console.log("Ramzan Akram");
  i++;
} while (i <= 10);*/

/*for of loop used for strings and arrays
let str = "MuhammadRamzanAkram"; //declare string as a variable
let size = 0;

for (let val of str) {
  //delare i as a variable inside the for of loop
  console.log("val =", val);
  size++;
}
console.log("size =", size);*/

/*for in loop used for objects
let student = {
  name: "Muhammad Ramzan Akram",
  age: 33,
  cgpa: 3.46,
  semester: 8,
  university: "Virtual Univesity",
  ispass: true,
};

for (let key in student) {
  // it display keys means name and age etc.
  console.log("Key =", key, "Value =", student[key]); //it display the declared key Muhammad Ramzan Akram and 33 and more.
}*/

//Practice Question no 01
// for (let num = 0; num <= 100; num++)
//   //console.log("num =", num); print number 1 to 100
//   //if (num % 2 === 0) { //even numbers
//   if (num % 2 !== 0) {
//     //odd numbers
//     console.log("num =", num);
//   }

//Practice Question no 02 Number Game

// let gameNum = 25;
// let userNum = prompt("Guess the game number:");

// while (userNum != gameNum) {
//   userNum = prompt("You guess the wrong number, please try again:");
// }

// console.log("Congrats, You guess the right number");

//Strings

// let str = "Muhammad Ramzan Akram";
// //str.length to check the length
// //str[0] to display the chracter of string
// console.log(str[9]);

//Template literals

// let obj = {
//   item: "Marker",
//   price: 999,
// };

// let output = `The cost of this ${obj.output} is ${obj.price} rupees.`;
// console.log(output);
// console.log("The cost of this ", obj.item, "is", obj.price, "rupees.");
// let specialString = `My name is Muhammad Ramzan Akram ${1 + 2 + 3 + 4}`;
// console.log(specialString);
//to send the string to nect line
// console.log("Ramzan's Friend\nKamran"); // \n called excape chracter it is also calcualted as one if we calculate the length of the string.

//String Methods

//1-toUpperCase

// let str = "Muhammad Ramzan Akram";
// str.toUpperCase();
// newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

//2-toLowerCase

// let str = "Muhammad Ramzan Akram";
// str.toLowerCase();
// newStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);

//3-trim (to remove whie spaces)

// let str = "       Muhammad Ramzan Akram      ";
// console.log(str.trim());

//4-str.slice ( return parts of the strings)

// let str = "Muhammad Ramzan Akram";
// console.log(str.slice(0, 8));

// //5-str1.concat(str2) ( Join str2 wuth str1)

// let str1 = "Muhammad ";
// let str2 = "Ramzan ";
// let str3 = "Akram";

//First way to do that
// let res = str1.concat(str2, str3);

//Second way to do that
// let res = str1 + str2 + str3;

// console.log(res);

//6-str.replace(searchval , newval) ( Search and replace the value in string)

//let str = "Hellololo";

// console.log(str.replace("lo", "p")); //it just replace the first lo

// console.log(str.replaceAll("lo", "p")); //it replace all the lo

//7 str.charAt(idx)( Return the number in index as per index)

// let str = "Hello";

// console.log(str.charAt(1));

//Practice Question

//Create a username using JS

// let fullname = prompt("Enter the user name without spaces");

// console.log("@" + fullname + fullname.length);
