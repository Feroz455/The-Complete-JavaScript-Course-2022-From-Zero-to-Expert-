/*
Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/const calcAverageHumanAge = (ages) => {
    // let humenAges = ;
    let average = ages
        .map((dogAge) => dogAge <= 2 ? (2 * dogAge) : (16 + dogAge * 4))
        .filter((age) => age >= 18)
        .reduce((prev, curr, i, arr) => prev + curr / arr.length, 0)
    console.log((average).toFixed(2));

};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
/*
44.00
47.33
*/