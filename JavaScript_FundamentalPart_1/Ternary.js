/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/
// const prompt = require("prompt-sync")({ sigint: true });
const prompt = require("prompt-sync")({ sigint: true });
let population = prompt("Population in your country?\t");
(population >= 33) ? console.log("Bangladesh's population in more then average") : console.log("Bangladesh's population in below then average");
population = 13;
(population >= 33) ? console.log("Bangladesh's population in more then average") : console.log("Bangladesh's population in below then average")
population = 130;
(population >= 33) ? console.log("Bangladesh's population in more then average") : console.log("Bangladesh's population in below then average")

/*
Population in your country?     176
Bangladesh's population in more then average 
Bangladesh's population in below then average
Bangladesh's population in more then average
*/