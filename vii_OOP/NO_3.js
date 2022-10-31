/*
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/
/*
class CarC1 {
  constructor(m, s) {
    this.make = m;
    this.speed = s;
  }
  acceleate() {
    this.speed += 10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(s) {
    this.speed = s * 1.6;
  }
}
*/

const CarCl = function (make, speed) {
  this.speed = speed;
  this.make = make;
};
CarCl.prototype.acceleate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};
CarCl.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h`);
};
const EV = function (make, speed, charge) {
  CarCl.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(CarCl.prototype);
EV.prototype.acceleate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `'${this.make}' going at '${this.speed}' km/h, with a charge of ${this.charge}%`
  );
};
/*
 Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
*/
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
const Firox = new EV("Firox", 120, 60);

Firox.acceleate();
Firox.brake();
Firox.acceleate();
/*
'Firox' going at '140' km/h, with a charge of 59%
'Firox' going at 135 km/h
'Firox' going at '155' km/h, with a charge of 58%
*/
