/*

Coding Challenge #2
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/
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

const car = new CarC1("Ford", 120);
console.log(car.speedUS);
car.acceleate();
car.acceleate();
car.acceleate();
car.speedUS = 75;
car.acceleate();
car.acceleate();
car.brake();
car.brake();
car.brake();
car.brake();
console.log(car.speedUS);
car.acceleate();
console.log(car.speedUS);
/*
75
'Ford' going at 130 km/h
'Ford' going at 140 km/h
'Ford' going at 150 km/h
'Ford' going at 130 km/h
'Ford' going at 140 km/h
'Ford' going at 135 km/h
'Ford' going at 130 km/h
'Ford' going at 125 km/h
'Ford' going at 120 km/h
75
'Ford' going at 130 km/h
81.25
*/
