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

//Time 8:42:54
