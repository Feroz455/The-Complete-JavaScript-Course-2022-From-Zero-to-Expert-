/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

const population = [[174, "Bangladesh"], [125.8, "Japan"], [1441, "China"], [144.1, "Russia"]];
console.log(population.length === 4 ? true : false);
const percentageOfWorld2 = function (population, name) {
    // return ((population / 7900) * 100);
    // console.log("Bangladesh has %f", percentageOfWorld1(174).toFixed(2));
    return (`${name} has ${((population / 7900) * 100).toFixed(2)}`);

}

const percentageOfWorld1 = (population) => {
    return (`${population[1]} has ${((population[0] / 7900) * 100).toFixed(2)}%`);
}
for (let i = 0; i < population.length; i++) {
    console.log(percentageOfWorld1(population[i]));
}
/*
Bangladesh has 2.20%
Japan has 1.59%
China has 18.24%
Russia has 1.82%
*/