//API - Application Programming Interface
//1-How to fetch data using api
//free api link share by shardha = free-apis-github.io

// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//   console.log("Getting Data");
//   let response = await fetch(URL);
//   console.log(response); //JSON fomrat like Javascript object format but it is not an actual JS object
// };

//2-Undersdtanding Terms (AJAX, JSON and json?(),

const URL = "https://cat-fact.herokuapp.com/facts";
const paraFact = document.querySelector("#facts");
const btn = document.querySelector("#btn");

//Get data by Async & Await

// const getFacts = async () => {
//   console.log("Getting Data");
//   let response = await fetch(URL);
//   console.log(response); //JSON fomrat like Javascript object format but it is not an actual JS object
//   let data = await response.json();
//   paraFact.innerText = data[1].text;
// };

// btn.addEventListener("click", getFacts);

//Get data by promise chains

// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       paraFact.innerText = data[2].text;
//     });
// }

// btn.addEventListener("click", getFacts);

//3-Request & Response

//HTTP Verb
//Response Status Code like 200 OK status code
