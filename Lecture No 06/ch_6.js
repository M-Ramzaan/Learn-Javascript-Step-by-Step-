//Document Object Model (DOM)
//console.log(window); //Global object in browser where our code save.
//window.document // Show complete HTML code in console window
//console.dir(window.document) it show object. Simply our code become an object in JS we can acees it via this.
//We directly write the above it in console window of the browser
//console.dir(document); It show the global object
//console.dir(document.body); //We acess the whole document object via this.
//console.log(document.body); //We can acces the specific tag via this.
//console.log(document.body.childNodes[1]); //We can acces the first tag via this.
//console.log(document.body.childNodes[1].innerText = "ABCD"); //We can acces the first tag via this and also edit this.
//In simple words we can say that we use our DOM to make dynamic changes in our website.

//1-DOM Manipulation;

//a-Selecting with Id. We can use this via below way,
//document.getElementById("idname")
// let heading = document.getElementById("heading"); //h1
// //console.log(heading);
// console.dir(heading);

//b-Selecting with Class. We can use this via below way,
//document.getElementByClassName("classname")
// let header = document.getElementsByClassName("header");
// console.log(header);
// console.dir(header);

//c-Selecting with tagname. We can use this via below way,
//document.getElementByTagName("tagname")
//let parahs = document.getElementsByTagName("p");
//console.log(parahs);
//console.dir(parahs);

//d-Query Selector. We can use this via below way,
//document.querySelector("myid/myclass/tag") it give the first element of same written.
// let firstEl = document.querySelector("h1");
// console.dir(firstEl);

//document.querySelectorAll("myid/myclass/tag") it give the all element of same written.
// let allEl = document.querySelectorAll("h1");
// console.dir(allEl);

//For accessing class or id we must have to written . before class and # before id same as HTML. On id single element is selected as Id is unique/
// let myClass = document.querySelectorAll(".header");
// console.dir(myClass);

//e-Properties
//1-tagName = It print the tag of searched element. We can use it in following way,
//document.tag // Use it directly in the console window

//2-innerText = It print the content with its children element. We can use it in following way,
//element.innerText // Use it directly in the console window
// let div = document.querySelector("div");
// console.dir(div);

//Home Work = Read about firstchild, last child, children and text, comment and element notes read via MDN Docs.

//Start lec from 6:37:42
