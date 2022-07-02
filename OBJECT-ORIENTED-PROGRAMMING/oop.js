"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const tanmoy = new Person("tanmoy", 2000);
const shuvo = new Person("shuvo", 2001);

console.log(tanmoy, shuvo);

//prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
tanmoy.calcAge();

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Marcedes", 110);
Car.prototype.accelare = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}kmh`);
};
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} going at ${this.speed}kmh`);
};

car1.accelare();
car1.accelare();
car1.accelare();
car1.brake();
car1.brake();
car1.brake();
