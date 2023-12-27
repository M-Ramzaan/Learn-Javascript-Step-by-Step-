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
//   }
//   console.log(count);
// }

//Count Vowels in a string (Arrow Function Method)
// const countVow = (str) => {
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
//   }
//   return count;
// };

//For EachLoops used only for Arrays.It is also called higher order funtion / method as it can alos used the other functions as parameters.
//use as below,
//arr.forEach(callbackfuntion)
//Example # 1
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//   //(val) this print all values in the arr
//   console.log(val);
// });

//Example # 2
// let array = ["Ramzan", "Shehraz", "Hassan", "Waqar"];
// array.forEach(function printStr(str) {
//   //(str) this print all values in the arr
//   console.log(str);
// });

//We can use it as an arrow function as below,
//Example # 1
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//   //(val) this print all values in the arr
//   console.log(val);
// });

// //Example # 2
// let array = ["Ramzan", "Hassan", "Shehzad", "Waqar"];
// array.forEach((val) => {
//   //(val) this print all values in the arr
//   console.log(val.toUpperCase());
// });

// //Example # 3 Parameters that can be use with this funcitons is val, idx and arr
// let array = ["Ramzan", "Hassan", "Shehzad", "Waqar"];
// array.forEach((val, idx, array) => {
//   //(val) this print all values in the arr
//   console.log(val, idx, array);
// });

//Practice Question # 1 Get square of each array
// let nums = [2, 4, 6, 8, 10];
// nums.forEach((val) => {
//   //(val) this print all values in the arr
//   console.log(val * val);
// });

//Array Methods
//01-Map Return new array
//Use it in a following way
//arr.map(call back function)(val, idx, array)) Generally we use only val parameter.

// let nums = [2, 4, 6, 8, 10];
// let newNum = nums.map((val) => {
//   return val * val;
// });
// console.log(newNum);

//02-Filter out value as per given condition;
//Use it in a following way
//For example we want to filter out even numner from an array we use this method as below,
//arr.filter((val) => {
//    return val % 2 === 0;
//});

// let arr = [2, 4, 6, 8, 10, 11, 12, 13];
// let evenArr = arr.filter((val) => {
//return val % 2 === 0; //return even numbers
//return val % 2 !== 0; //return odd numbers
//return val > 2; //return numbers greater than 2
//});
// console.log(evenArr);

//03-Reduce method return one single value as a result of an operation like Average and Sum;
//Example # 1 Multiply the array
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) => {
//   return res * curr;
// });
// console.log(output);

//Example # 2 Find the largest number
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) => {
//   return res > curr ? res : curr;
// });
// console.log(output);

//Practice Questions:
//Print out the marks from an array of toppers & toppers = 90
// let marks = [93, 76, 98, 87, 99, 100];
// let toppers = marks.filter((val) => {
//   return val > 90;
// });
// console.log(toppers);

//Practice Questions:
//Take number from the user and make array upto the user given number.
let n = prompt("Enter the number");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
});
console.log("Sum =", sum);

let mul = arr.reduce((res, curr) => {
  return res * curr;
});
console.log("Mul =", mul);
