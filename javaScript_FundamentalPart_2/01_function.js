/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/
let describeCountry = (country, population, capitalCity) => {
    return (`${country} has ${population} million peopla and its capital city is ${capitalCity}\n`);
}
const prompt = require("prompt-sync")({ sigint: true });
let country, population, capitalCity;

for (let i = 0; i < 3; i++) {
    country = prompt("country name? -> \t");
    population = prompt("population? -> \t");
    capitalCity = prompt("capitalCity name? -> \t");
    description = describeCountry(country, population, capitalCity);
    console.log(description);
}
/*
country name? ->        Bangladesh
population? ->  176
capitalCity name? ->    Dhaka
Bangladesh has 176 million peopla and its capital city is Dhaka

country name? ->        India
population? ->  100
capitalCity name? ->    Delhi
India has 100 million peopla and its capital city is Delhi

country name? ->        Srilanka
population? ->  50
capitalCity name? ->    Colombo
Srilanka has 50 million peopla and its capital city is Colombo
*/