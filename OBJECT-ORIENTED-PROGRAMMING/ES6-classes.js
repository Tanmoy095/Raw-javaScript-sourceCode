//function declaration
class PersonCl {
  constructor(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
  }
  //all the methods we write in class outside constructor will be on the  prototype of objects
  calcAge() {
    console.log(2037 - this.birthyear);
  }
  greet() {
    console.log(`hey ${this.firstName}`);
  }
}

const Jessica = new PersonCl("Jessica", 2022);
Jessica.calcAge();

//WE CAN WRITE prototype outside class
// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };
Jessica.greet();
