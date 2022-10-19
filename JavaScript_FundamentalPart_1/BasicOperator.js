/**
 * LECTURE: Basic Operators
 * 1. If your country split in half, and each half would contain half the population
 * then how many people would live in each half
 * 2.Increase the population of your country by 1 and log the result to the console
 * 3. Finland has a population of 6 milion. Does your country have more people then Finland
 */
let population = 164.7, finPopulation = 6;
let halfPopulation = population / 2;
console.log(halfPopulation);
console.log(halfPopulation + 1);
// console.log(population - 6);
if (population > finPopulation) {
    console.log("Bangladesh has more population then finland");
}
else {
    console.log("Finland has more population then Bangladesh");
}
let avgPopulation = 33;
if (population > avgPopulation) {
    console.log("Bangladesh has more population then Average country");
}
else
    console.log("Bangladesh has less population then Average country");

let description = "Portugal is in Europe ,and its 11 million people speak portuguese";
console.log(description);
/*
82.35
83.35
Bangladesh has more population then finland
Bangladesh has more population then Average country
Portugal is in Europe ,and its 11 million people speak portuguese
*/