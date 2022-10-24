
/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`...${arr[i]}\xB0C ic ${i} days`);
    }
};
printForecast(data1);
printForecast(data2);

/*
...17°C ic 0 days
...21°C ic 1 days
...23°C ic 2 days
...12°C ic 0 days
...5°C ic 1 days 
...-5°C ic 2 days
...0°C ic 3 days 
...4°C ic 4 days 
*/