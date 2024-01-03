//Event Handling via JS;

// let btn = document.querySelector("btn2");
// btn2.onclick = () => {
//   console.log("A button was clicked");
//   let a = 1;
//   a++;
//   console.log(a);
// };

// let div = document.querySelector("div2");
// div2.onmouseover = () => {
//   console.log("You are inside div");
// };
//Important Point
//JS event hadnling have more prioirty than the HTML inline event hadnling.
//In JS if you re write an event for an same element the lastet written event work not the old one.

//1-Event Objects
//let btn2 = document.querySelector("#btn2");
// btn2.onclick = (evt) => {
//   console.log(evt); //It print the event object.
//   console.log(evt.type); //It print the event type.
//   console.log(evt.target); //It print the element where the event is set.
//   console.log(evt.clientX, evt.clientY); //It print the place on web where the event is occuring.
// };

// let div = document.querySelector("div2");
// div2.onmouseover = (evt) => {
//   console.log("You are inside div");
//   console.log(evt); //It print the event object.
//   console.log(evt.type); //It print the event type.
//   console.log(evt.target); //It print the element where the event is set.
//   console.log(evt.clientX, evt.clientY); //It print the place on web where the event is occuring.
// };

//2-Event Listner
//Use it in following way
//node.addEventListner(event, callback)
//node.removeEventListner(event, callback)
// let btn2 = document.querySelector("#btn2");
// btn2.onclick = (evt) => {
//   console.log(evt); //It print the event object.
//   console.log(evt.type); //It print the event type.
//   console.log(evt.target); //It print the element where the event is set.
//   console.log(evt.clientX, evt.clientY); //It print the place on web where the event is occuring.
// };
// btn2.addEventListener("click", (evt) => {
//   console.log("Button 01 was clicked - handler 01");
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX, evt.clientY);
// });

// btn2.addEventListener("click", () => {
//   console.log("Button 01 was clicked - handler 02");
// });

// const handler3 = () => {
//   console.log("Button 01 was clicked - handler 03");
// };

// btn2.addEventListener("click", handler3); // This is done as we have to remove this handler.

// btn2.removeEventListener("click", handler3); //This is used to remove the handler.

// btn2.addEventListener("click", () => {
//   console.log("Button 01 was clicked - handler 04");
// });

//Practice Question.
// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light"; // dark
// modeBtn.addEventListener("click", () => {
//   if (currMode === "light") {
//     currMode = "dark";
//     // document.querySelector("body").style.backgroundColor = "black";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currMode = "light";
//     // document.querySelector("body").style.backgroundColor = "white";
//     body.classList.add("light");
//     body.classList.add("dark");
//   }
//   console.log(currMode);
// });
