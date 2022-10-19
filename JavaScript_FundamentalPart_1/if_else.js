// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
let population = 164.7, finPopulation = 6;
let halfPopulation = population / 2;
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