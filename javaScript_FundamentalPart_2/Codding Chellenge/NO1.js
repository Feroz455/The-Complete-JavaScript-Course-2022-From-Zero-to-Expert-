/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
const prompt = require("prompt-sync")({ sigint: true });
const calcAverage = (set1, set2, set3) => {
    return ((set1 + set2 + set3) / 3);

}
const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolhins} and ${avgKoalas})`);
    }
    else if ((avgDolhins * 2) <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} and ${avgDolhins})`);
    }
    else {
        console.log("NO ONE WINS");
    }

}
let set1, set2, set3, avgDolhins, avgKoalas;
for (let i = 0; i < 2; i++) {
    set1 = Number(prompt("Enter set value -> "));
    set2 = Number(prompt("Enter set value -> "));
    set3 = Number(prompt("Enter set value -> "));
    avgDolhins = calcAverage(set1, set2, set3);
    set1 = Number(prompt("Enter set value -> "));
    set2 = Number(prompt("Enter set value -> "));
    set3 = Number(prompt("Enter set value -> "));
    avgKoalas = calcAverage(set1, set2, set3);
    checkWinner(avgDolhins, avgKoalas);
}
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
/*
Enter set value -> 44
Enter set value -> 23
Enter set value -> 71
Enter set value -> 65
Enter set value -> 54
Enter set value -> 49
NO ONE WINS
Enter set value -> 85
Enter set value -> 54
Enter set value -> 41
Enter set value -> 23
Enter set value -> 34
Enter set value -> 27
Dolphins win (60 and 28)
*/