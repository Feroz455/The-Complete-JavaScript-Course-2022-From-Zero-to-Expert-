/**
 * Codding Challenge #4
 * 
 * Steven wants to build a very simple tip calculator 
 * for whenever he gose eating in  a resturant. In his 
 * country, it's usual to tip 15% if the bill values is 
 * between 50 and 300. if the value is different the tip 
 * is 20%.
 * 
 * 1. Your task is to calculate the tip depending on the
 * bill value. create varibale called 'tip' for this.It's 
 * not allowed to use an if/else (If it's easier for you,
 * then you can srart with an if/else statement, and then
 * try to convert it to a ternary operator)
 * 
 * 2. Print a string to te console containing the bill
 * value, the tip and the final value(bill + tip). 
 * Example: "The Bill was 275" the tip was 41.25 tip and 
 * total value 316.25
 * 
 * TEST DATA: Test for bill values 275, 40 and 430
 */


let bill = 275, tip;
tip = (bill >= 50 || bill <= 300) ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(`Your bill is -> ${bill} \nand the tip is ->  ${tip} \nnow the total bill = ${bill + tip}`);


bill = 40;
if (bill >= 50 && bill <= 30) {
    tip = (bill * 15) / 100;
}
else {
    tip = (bill * 20) / 100;
}
console.log(`Your bill is -> ${bill} \nand the tip is ->  ${tip} \nnow the total bill = ${bill + tip}`);
bill = 430;
tip = (bill >= 50 || bill <= 300) ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(`Your bill is -> ${bill} \nand the tip is ->  ${tip} \nnow the total bill = ${bill + tip}`);
/*
Your bill is -> 275        
and the tip is ->  41.25   
now the total bill = 316.25
Your bill is -> 40      
and the tip is ->  8    
now the total bill = 48 
Your bill is -> 430     
and the tip is ->  86   
now the total bill = 516
*/