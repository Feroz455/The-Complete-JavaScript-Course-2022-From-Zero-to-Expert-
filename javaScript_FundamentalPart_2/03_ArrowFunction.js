/*
LECTURE: Function Declarations vs. Expressions
    1. The world population is 7900 million people. Create a function declaration
        called 'percentageOfWorld1' which receives a 'population' value, and
        returns the percentage of the world population that the given population
        represents. For example, China has 1441 million people, so it's about 18.2% of
        the world population
    2. To calculate the percentage, divide the given 'population' value by 7900
        and then multiply by 100    
    3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
        store the results into variables, and log them to the console
    4. Create a function expression which does the exact same thing, called
        'percentageOfWorld2', and also call it with 3 country populations (can be
        the same populations)
*/
function percentageOfWorld1(population, name) {
    // return ((population / 7900) * 100);
    // console.log("Bangladesh has %f", percentageOfWorld1(174).toFixed(2));
    return (`${name} has ${((population / 7900) * 100).toFixed(2)}`);

}
const prompt = require("prompt-sync")({ sigint: true });
let population, Name;
for (let i = 0; i < 3; i++) {
    Name = prompt("country name\t");
    population = prompt("Population of your country    ");
    console.log(percentageOfWorld1(population, Name));
}
const percentageOfWorld2 = function (population, name) {
    // return ((population / 7900) * 100);
    // console.log("Bangladesh has %f", percentageOfWorld1(174).toFixed(2));
    return (`${name} has ${((population / 7900) * 100).toFixed(2)}`);

}
for (let i = 0; i < 3; i++) {
    Name = prompt("country name\t");
    population = prompt("Population of your country    ");
    console.log(percentageOfWorld1(population, Name));
}
/*
country name    Bangladesh
Population of your country    174
Bangladesh has 2.20
country name    india
Population of your country    1300
india has 16.46
country name    China
Population of your country    1400
China has 17.72
country name    Bangladesh
Population of your country    174
Bangladesh has 2.20
country name    india
Population of your country    1300
india has 16.46
country name    china
Population of your country    1441
china has 18.24
 */