/**
 * LECTURE:  String and Template Literals
 * 1. Recreate the "Description" varible from the last assignment, this time using the template literal syntax
 */
let country, Continent, population;
country = "Bangladesh";
Continent = "Asia";
population = 164.7;
let Description = `Country name ${country} in ${Continent} and pupulation ${population} million`;
console.log(Description);
/*
Country name Bangladesh in Asia and pupulation 164.7 million
*/