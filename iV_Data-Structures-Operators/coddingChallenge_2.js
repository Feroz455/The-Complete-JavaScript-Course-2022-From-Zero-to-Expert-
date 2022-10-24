/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
*/
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    printGoals: function (...player) {
        for (let value of player) {
            let temp = 0;
            for (let key of this.scored) {
                if (value === key)
                    temp += 1;
            }
            console.log(value, temp);
        }
    },
    winner: function () {
        console.log(this.odds.team1 < this.odds.team2 ? "team 1 is more likely to win" : "team 2 is more likely to win");
    }
};

/*
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
*/
for (let [key, score] of game.scored.entries()) {
    console.log(`Gole ${key + 1}:- ${score}`);
}
// for (let score of game.scored.values()) {
//     console.log(score)
// }
// for (let [key, score] of game.scored.keys()) {
//     console.log(k, score)
// }
/*
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
*/
let sum = 0;
let properties = Object.values(game.odds);
for (let value of properties) {
    sum += value;
}
console.log(sum / properties.length);

/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
*/
properties = Object.entries(game.odds);
for (let [key, value] of properties) {
    if (key !== 'x')
        console.log(`Odd of victory ${game[key]} : ${value}`);
    else {
        console.log(`Odd of draw : ${value}`);
    }
}
/*
Odd of victory Bayern Munich : 1.33
Odd of draw : 3.25
Odd of victory Borrussia Dortmund : 6.5
*/
/*
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/
const scorers = {};
for (const element of game.scored) {
    if (scorers[element]) {
        scorers[element] += 1;
    } else {
        scorers[element] = 1;
    }
}

console.log(scorers);