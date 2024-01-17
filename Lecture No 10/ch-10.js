//Classes and Objects
//Objects (Direct Way)
const student = {
  fullName: "Muhammad Ramzan Akram",
  marks: 93.7,
  printMakrs: function () {
    console.log("marks = ", this.marks); //here we cannot access marks directly so we use "this" to access this studnet object marks.
  },
};

//1-Prototype in JS
//A special property automatically create with an object.

const employee = {
  calTax1() {
    console.log("Tax rate is 10%");
  },
};

const zeeshanAkram = {
  salery: 50000,
  calTax1() {
    console.log("Tax rate is 20%");
  },
};

const zeeshanAkram1 = {
  salery: 40000,
};

const zeeshanAkram2 = {
  salery: 30000,
};

const zeeshanAkram3 = {
  salery: 20000,
};

const zeeshanAkram4 = {
  salery: 10000,
};

//Prototype
zeeshanAkram.__proto__ = employee;
zeeshanAkram1.__proto__ = employee;
zeeshanAkram2.__proto__ = employee;
zeeshanAkram3.__proto__ = employee;
zeeshanAkram4.__proto__ = employee;

//2-Classes in JS
// class ToyotaCar {
//   start() {
//     console.log("Start");
//   }
//   stop() {
//     console.log("Stop");
//   }
//   setBrand(brand) {
//     this.brand = brand;
//   }
// }

//let fortuner = new ToyotaCar();
//fortuner.setBrand("IMV Fortuner 188D");
//let lexus = new ToyotaCar();
//lexus.setBrand("Lexus Cross-Hybrid");

//a-Constructor
// class ToyotaCar {
//   constructor(brand, mileage) {
//     console.log("Creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("Start");
//   }
//   stop() {
//     console.log("Stop");
//   }
//   setBrand(brand) {
//     this.brand = brand;
//   }
// }

// let fortuner = new ToyotaCar("Fortuner", 10); //constructor
// console.log(fortuner);
// let lexus = new ToyotaCar("Lexus", 11); //constructor
// console.log(lexus);

//2-Inheritence & Super Keyword Parent and Child Classes concepts
// class GoodPerson {
//   constructor(name) {
//     this.speices = "Ashraful Makhloqat";
//     this.name = name;
//   }
//   eat() {
//     console.log("Eat healthy food");
//   }
//   sleep() {
//     console.log("Sleep at 10 O'Clock");
//   }
//   wakeup() {
//     console.log("Wake up at 05 O'Clock");
//   }
//   work() {
//     console.log("Do nothing");
//   }
// }

// class Engineer extends GoodPerson {
//   constructor(name) {
//     super(name);
//     //this.branch = branch;
//   }
//   work() {
//     super.eat();
//     console.log("Technical working, solve problems");
//   } //Here child class finction invoke and this is called "Method Overriding".
// }

// class Doctor extends GoodPerson {
//   work() {
//     console.log("Diagnose diseases, Treat Patients");
//   }
// }

// //let RamzanAkram = new Engineer("Chemical Engineer");
// let engObj = new Engineer("Muhammad Ramzan Akram");
// let MirhaRamzan = new Doctor();

//Practice Question;
// let DATA = "Confidential Information";

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("Website Data =", DATA);
//   }
// }

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     DATA = "Secret Information";
//   }
// }

// let Studetn1 = new User("Muhammad Ramzan Akram", "ramzanakram@outlook.com");
// let Studetn2 = new User("Mirha Ramzan", "mirharamzan@email.com");

// let Admin1 = new Admin("Kanwal Ramzan", "kanwalramzan@email.com");

//Additional Topic
//Error Handling
//Try and Catch
// let a = 5;
// let b = 10;

// console.log("a =", a);
// console.log("b =", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// try {
//   console.log("a - b =", a - c);
// } catch (err) {
//   console.log(err);
// }
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);
