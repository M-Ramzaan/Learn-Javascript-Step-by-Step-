//console.log("Chapter No 11");

//1-Synchronous Programing
// console.log("One");
// console.log("Two");
// console.log("Three");

//2-Asynchronous Programing
//Simple way of create function
// function hello() {
//   console.log("Hello");
// }

//Arrow Function
// console.log("One");
// console.log("Two");
// console.log("Three");

// setTimeout(() => {
//   console.log("Hello");
// }, 4000);

// console.log("Four");
// console.log("Five");

//3-CallBacks
// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

//First Way to do it
//calculator(100, 200, sum);

//Second Way to do it
// calculator(100, 200, (a, b) => {
//   console.log(a + b);
// });

// const hello = () => {
//   console.log("Hello");
// };

// setTimeout(hello, 2000);

//3-CallBacks Hell
//Nesting
//Example 01

// let age = 19;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("Senior");
//   } else {
//     console.log("Middle");
//   }
// } else {
//   console.log("Junior");
// }

// //Example 02

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     str = str + j;
//   }
//   console.log(i, str);
// }

// function getData(dataId) {
//   console.log("Data", dataId);
// }

// function getData(dataId) {
//   //2second
//   setTimeout(() => {
//     console.log("Data", dataId);
//   }, 2000);
// }
//Call Backs Hell

// function getData(dataId, getNextData) {
//   //2second
//   setTimeout(() => {
//     console.log("Data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("Geting Data 2..");
//   getData(2, () => {
//     console.log("Geting Data 3..");
//     getData(3, () => {
//       console.log("Geting Data 4..");
//       getData(4);
//     });
//   });
// });

//4-Promises
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a Promise");
//   reject("Some error occured");
// });

//Example
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Sucessfull");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
//1:42:20
