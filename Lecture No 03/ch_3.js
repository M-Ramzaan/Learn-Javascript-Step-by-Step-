/*Loops and Strings
//count=1; (Initializer statement)
//count=<=5; (Stoping Statement)
//count++; (Updation Statement)
for (count = 1; count <= 5; count++) {
  console.log("Ramzan Akram");
}*/

/*Example 01 Calculate 1 to n numbers (Loop)
let sum = 0;
let n = 100
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("sum =", sum);
for (i = 1; i <= 5; i++) {
  console.log("i = ", i);
}*/

/*Infinite Loop
//Infinite loop is never ending loop its stoping condition is never end.
//Example that we never run
for (i = 1; i >= 0; i++){
  console.log("i = ", i);
}*/

/*While Loop (Same work can be donw with while loop that we do with the for loop but the syntax is little bit diffrent)
let i = 1;
while (i <= 10) {
  console.log("i = ", i);
  i++;
}*/

/*Do while loop
let i = 1;
do {
  console.log("Ramzan Akram");
  i++;
} while (i <= 10);*/

/*for of loop used for strings and arrays
let str = "MuhammadRamzanAkram"; //declare string as a variable
let size = 0;

for (let val of str) {
  //delare i as a variable inside the for of loop
  console.log("val =", val);
  size++;
}
console.log("size =", size);*/

/*for in loop used for objects
let student = {
  name: "Muhammad Ramzan Akram",
  age: 33,
  cgpa: 3.46,
  semester: 8,
  university: "Virtual Univesity",
  ispass: true,
};

for (let key in student) {
  // it display keys means name and age etc.
  console.log("Key =", key, "Value =", student[key]); //it display the declared key Muhammad Ramzan Akram and 33 and more.
}*/
