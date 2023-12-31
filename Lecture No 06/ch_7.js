//Learning JS Chapter 06 Part 02 (DOM)
//console.log("Hello World");

//DOM Manipulation

//1-Attributes

//a-getAttribute(attr) It is used to get the value to the attribute.
//Use this as below,

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para);
// console.log(para.getAttribute("class"));

//b-setAttribute(attr,value) It is used to get the value to the attribute.
//Use this as below,

// let div = document.querySelector("div");
// console.log(div);

// let id = div.setAttribute("id", "newBox");
// console.log(id);

// let name = div.setAttribute("name", "newJs");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para);
// console.log(para.setAttribute("class", "newPara"));

//c-Style
//node.style //Access style of HTML element for example div

// let div = document.querySelector("div");
// console.log(div);
// console.log(div.style);

// We can chanage the style of the HTML elelment via JS using this property like below,

// div.style.backgroundColor = "Green";
// div.style.fontSize = "20px";
// div.innerText = "M.Ramzan Akram";

//2-Add new element via Javascript;
//Use this in follwing steps,
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// console.log(newBtn);

// let div = document.querySelector("div");
//div.append(newBtn); // add at the end of the node inside.
// div.prepend(newBtn); // add at the start of the node inside.
// div.after(newBtn); // add at the end of the node outside.
// div.before(newBtn); // add at the start of the node inside.

//3-Delete an element via Javascript;
// let p = document.querySelector("p");
// p.remove();
// div.remove();
//Home Work Assignment
//Read MDN Documentation about these two
//1-appendChild
//2-removeChild
