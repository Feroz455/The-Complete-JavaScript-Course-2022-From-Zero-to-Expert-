/**
 * Coding Challenge #3
 * 
 * There are two gymnastics teams, Dolphins and Koalas they
 * compete against each other 3 times. The winner with 
 * the heighest average scpre wins the a trophy
 * 
 * 
 * 1. Calclate the avarage score for each team, using the 
 * test data below
 * 2.Compere the team's average scores to determne the
 * winner of the competition, and print it to the console.
 * Don't forget that there can be a draw, so test for that
 * as well(draw means they have the same avarage score)
 * 
 * 3. Bonus1: Include a requiement for the minimul score 
 * of 100. with this rule, a team only wins if it has a 
 * heigher score then the other team, and the same time a
 * score of at least 100 points.HINT use a logical operat-
 * -or to test for minimum score,as well as multiple else-if block 
 * 
 * 
 * 4.Bonu 2 :Minimum score also applies to a draw! so a 
 * draw only happens when both teams have same score and
 * both have scoe greater or equal 100 poits. Otherwise no team wins the tropy.
 * 
 * 
 * TEST DATA: Dolphins score 96, 108, 89. 
 * koalas score 88, 91, 110
 * 
 * TEST DATA Bonus 1: Dolphins score 97,112 & 101. 
 * koalas score 109, 95, 123
 * 
 * TEST DATA Bonus 2: Dolphins score 97,112 & 101. 
 * koalas score 109, 95, 106
 * 
 * 
 */
let Dolphins = {
    Name: "Dolphin"
}
let Koalas = {
    Name: "Koalas"
}
let avarage = (a) => {

    return ((a.set1 + a.set2 + a.set3) / 3);
}
let win = (a, b) => {
    if ((a.avarage > b.avarage) && a.avarage >= 100) {

        console.log(`\n${a.Name} win the game with score ${(a.avarage).toFixed(2)}\n`);
    }
    else if ((a.avarage < b.avarage) && b.avarage >= 100) {
        console.log(`\n${b.Name} win the game with score ${(b.avarage).toFixed(2)}\n`);
    }
    else if ((a.avarage === b.avarage) && b.avarage >= 100 && a.avarage >= 100) {
        console.log("\nBoth team Win the trophy\n")
    }
    else {
        console.log("No one win the trophy");
    }
}
// Dolphins.scr1 = [96, 108, 89];
// Koalas.scr1 = [88, 91, 110];
Dolphins.set1 = 96;
Dolphins.set2 = 89;
Dolphins.set3 = 108;


Koalas.set1 = 88;
Koalas.set2 = 91;
Koalas.set3 = 110;
Dolphins.avarage = avarage(Dolphins);
Koalas.avarage = avarage(Koalas);
win(Dolphins, Koalas);

/**
 *  * !TEST DATA Bonus 1: Dolphins score 97,112 & 101. 
 *  * koalas score 109, 95, 123
 */
Dolphins.set1 = 97;
Dolphins.set2 = 112;
Dolphins.set3 = 101;


Koalas.set1 = 109;
Koalas.set2 = 95;
Koalas.set3 = 123;
Dolphins.avarage = avarage(Dolphins);
Koalas.avarage = avarage(Koalas);
win(Dolphins, Koalas);


/**
 *  * TEST DATA Bonus 2: Dolphins score 97,112 & 101. 
 *  * koalas score 109, 95, 106
 */


Dolphins.set1 = 97;
Dolphins.set2 = 112;
Dolphins.set3 = 101;


Koalas.set1 = 109;
Koalas.set2 = 95;
Koalas.set3 = 106;
Dolphins.avarage = avarage(Dolphins);
Koalas.avarage = avarage(Koalas);
win(Dolphins, Koalas);
/*
No one win the trophy

Koalas win the game with score 109.00


Both team Win the trophy
*/