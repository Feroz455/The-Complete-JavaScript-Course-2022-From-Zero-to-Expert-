/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
    like the most. This function takes in two arguments: 'country' and
    'population', and returns a string like this: 'China has 1441 million people,
    which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
    'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/
const describePopulation = (country, population) => {
    return (`${country} has ${population} million people which is about ${percentageOfWorld1(population).toFixed(2)} of the world`);
}
const percentageOfWorld1 = (population) => {

    return (population / 7900) * 100;
}

console.log(describePopulation("China", 1441));
/*
China has 1441 million people which is about 18.24 of the world
*/