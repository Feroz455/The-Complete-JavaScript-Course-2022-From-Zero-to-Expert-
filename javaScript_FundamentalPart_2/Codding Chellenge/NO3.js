/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

const John = {
    fristName: "John",
    lastName: "Smith",
    mass: 78,
    height: 1.69,
}
const Mark = {
    fristName: "Mard",
    lastName: "Miller",
    mass: 92,
    height: 1.95,
    BMI() {
        return (this.mass / this.height ** 2);
    }
}
// // cons
// console.log(Mark.BMI.call(Mark));
const Higher = (mark, john) => {
    const markBMI = mark.BMI.call(mark);
    const johnBMI = mark.BMI.call(john);
    if (markBMI > johnBMI) {
        // "John's BMI (28.3) is higher than Mark's (23.9)!"
        console.log(`${mark.fristName} ${mark.lastName} (${markBMI.toFixed(2)})  is higer then ${john.fristName} ${john.lastName} (${johnBMI.toFixed(2)})`)
    }
    else {
        // "John's BMI (28.3) is higher than Mark's (23.9)!"
        console.log(`${john.fristName} ${john.lastName} (${johnBMI.toFixed(2)}) is higer then  ${mark.fristName} ${mark.lastName} (${markBMI.toFixed(2)}) `)
    }
}
Higher(Mark, John);
/*
John Smith (27.31) is higer then  Mard Miller (24.19) 
*/