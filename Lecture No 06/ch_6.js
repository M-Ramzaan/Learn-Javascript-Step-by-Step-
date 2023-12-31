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

//3-InnerHTML = return the plain text or HTML content of the element.
//div.innerHTML //Use it directly in the console window

//Example of innerText & innerHTML
// let myheading = document.querySelector("h2");
//We can change it dynamically in the consile via JS directly by using following ways,
//1- myheading.innerText = "New Heading" // Use it directly in the console window.
//2- myheading.innerHTML = "<i>New Heading</i>" // Use it directly in the console window.

//4-textContent = return textual content even for hidden elements.
//I make my h2 hidden in HTML linked file to this js and then use this property.
//h2.textContent //Use it directly in the console window.

//Practice Question 01
// let h3 = document.querySelector("h3");
// console.dir(h3);
// h3.innerText = h3.innerText + "from APNA COLLEGE students.";

//Practice Question 02
// let divs = document.querySelectorAll(".Box");
// console.log(divs);
// divs[0].innerText = "new unique value1";
// divs[1].innerText = "new unique value2";
// divs[2].innerText = "new unique value3";
//Home Work = Read about firstchild, last child, children and text, comment and element notes read via MDN Docs.
