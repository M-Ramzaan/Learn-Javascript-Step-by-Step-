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
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       resolve("Sucessfull");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

//2 functions for using promise,
//1-promise.then((res)=>{})Fullfilled
//2-promise.catch((err)=>{})Fullfilled

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     reject("network error");
//     //resolve("Sucessfull");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fullfilled", res);
// });

//for error catch in promise

// promise.catch((err) => {
//   console.log("Rejected", err);
// });

//Promise Chains

//One way to do that

// function async() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("sucess");
//     }, 4000);
//   });
// }

// function async2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("sucessfull");
//     }, 4000);
//   });
// }

// console.log("fetching data1");

// let p1 = async();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetchind data2");
//   let p2 = async2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

//Second way to do that

// function async() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("sucess");
//     }, 4000);
//   });
// }

// function async2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("sucessfull");
//     }, 4000);
//   });
// }

// console.log("fetching data1");

// async().then((res) => {
//   console.log(res);
//   console.log("fetchind data2");
//   async2().then((res) => {
//     console.log(res);
//   });
// });

//Call Backs Hell => Solution via Promise chains

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       resolve("Sucessfull");
//     }, 2000);
//   });
// }

//One way to do that

// getData("Ramzan").then((res) => {
//   console.log(res);
//   getData("Mirha").then(() => {
//     console.log(res);
//   });
// });

// way to do that (Actual Data Call)

// console.log("getting data1");
// getData("Ramzan")
//   .then((res) => {
//     console.log("getting data2");
//     return getData("Mirha");
//   })
//   .then((res) => {
//     console.log("getting data3");
//     return getData("Kanwal");
//   })
//   .then((res) => {
//     console.log(res);
//   });

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

//Async-Await

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api(); //1st
//   await api(); //2nd
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Sucessfull");
    }, 2000);
  });
}

//Async-Await perfect example

async function getAllData() {
  console.log("Getting Data 01");
  await getData(1);
  console.log("Getting Data 02");
  await getData(2);
  console.log("Getting Data 03");
  await getData(3);
  console.log("Getting Data 04");
  await getData(4);
  console.log("Getting Data 05");
  await getData(5);
}

//Advanced JS concept
//IIFE = Immidietly Invoked Function Expression;
(async function () {
  console.log("Getting Data 01");
  await getData(1);
  console.log("Getting Data 02");
  await getData(2);
  console.log("Getting Data 03");
  await getData(3);
  console.log("Getting Data 04");
  await getData(4);
  console.log("Getting Data 05");
  await getData(5);
})();
