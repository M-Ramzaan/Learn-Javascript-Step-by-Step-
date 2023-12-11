//Arrays
//Marks
// let marks = [92, 83, 65, 87, 90];
// console.log(marks);

// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// console.log(heroes);
// console.log(heroes.length);
// console.log(typeof heroes);

//1-Array Indices
//Marks
// let marks = [92, 83, 65, 87, 90];
// console.log(marks[0]);
// marks[0] = 100;
// console.log(marks[0]); //we can update the marks(number) in arryas.

// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// console.log(heroes[4]);
// heroes[4] = "Sir Kamran Tessori"; // In arrays we can update the string but in javascript strings are immutable means they cant be change or update independently.
// console.log(heroes[4]);

// 2-Looping over an array
// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// for (i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

//for of loop
// let cities = ["Karachi", "Islambad", "Lahore", "Peshawar"];
// for (let city of cities) {
//   console.log(city.toUpperCase());
// }

// let items = [250, 645, 300, 900, 50];
// let i = 0;

//for of loop
// for (let val of items) {
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`vlaue after applying offer is = ${items[i]}`);
//   i++;
// }

//for loop
// for(let i = 0; i < items.length; i++){
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);

//3 Array Methods
//1-Push - add item in the end of an array
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// foodItems.push("Kourma", "Pizza", "Cold-Drinks");
// console.log(foodItems);

//2-Pop - delete item in the end of an array
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// console.log(foodItems);
// let deletedItems = foodItems.pop();
// console.log(foodItems);
// console.log("Deleted = ", deletedItems);

//3- toString change an array into a string just for display data in the form of string.
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// console.log(foodItems.toString());
// console.log(foodItems);

//4- toString change an array into a string just for display data in the form of string.
// let karachi_foodItems = ["Biryani", "Nehari"];
// lahore_foodItems = ["Kheer", "Nan-Khatai"];
// chakwal_foodItems = ["Rewri", "Dry Fruits"];
// let foodItems = karachi_foodItems.concat(lahore_foodItems, chakwal_foodItems);
// console.log(foodItems);

//5-unshift - add item in the start of an array
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// foodItems.unshift("Kourma", "Pizza", "Cold-Drinks");
// console.log(foodItems);

//6-shift - delete item in the start of an array
// let foodItems = ["Biryani", "Kheer", "Nehari", "Nan-Khatai"];
// console.log(foodItems);
// let deletedItems = foodItems.shift();
// console.log(foodItems);
// console.log("Deleted = ", deletedItems);
//Note: All methods in Arrays as well as in Strings start with a small letter.

//7-slice - return with an silce in an array no change in orignal array
// let heroes = [
//   "Ramzan",
//   "Sir Zia",
//   "Sir Kasim",
//   "Sir Daniyal Nagoori",
//   "Governor Kamran Tessori",
//   "Sir Irfan Malik",
// ];
// console.log(heroes.slice(0, 2)); //here from 1 to 2 means just show 0 and 1 not 2 last number not show any display.
// console.log(heroes.slice()); //If you dont end any number it return the all vlaues.
