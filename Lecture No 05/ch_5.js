//console.log("Lecture No 05");

//Functions (Block of code for a specified task, It also be used when required)
//1-Define Function
// function myFunction() {
//   console.log("My name is Muhammad Ramzan Akram.");
//   console.log("I am learning JS from Shardha Khapra Youtube Channel.");
//}
//2-Call Function
// myFunction();
//2- Paramters and Inputs
// function myFunction(msg) {
//   console.log(msg);
// }
// myFunction("Hello my name is Muhammad Ramzan Akram");

// function myFunction(msg, n) {
//   console.log(msg * n);
// }
// myFunction("Hello my name is Muhammad Ramzan Akram", 100);
//NaN eroor means msg typed here in the code above is not a number

// 3-Sum Function (Make a function to calculate sum of two numbers)
// function sum(x,y) {
//   console.log(x + y);
// }

//Return with a value
// function sum(x, y) {
//   s = x + y;
//   return s; // just return one value for multiple values we use arrays.
// }
// let val = sum(100, 400);
// console.log(val);

//1- Arrow Function =>
//Normal way to write function
// function sum(a, b) {
//   return a + b;
// }

//Modern JS way to write function
// const arrowsum = (a, b) => {
//   return a + b;
// };

// function mul(a, b) {
//   return a * b;
// }

// //Modern JS way to write function
// let = arrowmul = (a, b) => {
//   return a * b;
// };

//Practice Question
//Count Vowels in a string (Normal Function Method)
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//     console.log(char);
//   }

//   console.log(count);
// }

//Count Vowels in a string (Arrow Function Method)
const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
};
