///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarC1 {
  constructor(m, s) {
    this.make = m;
    this.speed = s;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(s) {
    return (this.speed = 1.6 * s);
  }
}
class EVCl extends CarC1 {
  #charge = undefined;
  constructor(m, s, ch) {
    super(m, s);
    this.#charge = ch;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
  }
}

/*
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

*/
const Riv = new EVCl("Rivian", 120, 23);
Riv.accelerate();
Riv.accelerate();
Riv.accelerate();
Riv.brake();
Riv.brake();

/*
Rivian is going at 140 km/h with a charge of 22
Rivian is going at 160 km/h with a charge of 21
Rivian is going at 180 km/h with a charge of 20
Rivian is going at 175 km/h
Rivian is going at 170 km/h
*/
