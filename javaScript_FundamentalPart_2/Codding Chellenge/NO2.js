/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀
*/

// let bill = 275, tip;
// tip = (bill >= 50 || bill <= 300) ? (bill * 15) / 100 : (bill * 20) / 100;
// console.log(`Your bill is -> ${bill} \nand the tip is ->  ${tip} \nnow the total bill = ${bill + tip}`);
const totalBill = (bills, tips) => {
    for (let i = 0; i < bills.length; i++) {
        console.log(`Your bill is -> ${bills[i]} \nand the tip is ->  ${tips[i]} \nnow the total bill = ${bills[i] + tips[i]}`);
    }
}
const calcTips = (bills, tips) => {
    for (let bill of bills) {
        tips.push((bill >= 50 || bill <= 300) ? (bill * 15) / 100 : (bill * 20) / 100);
    }
    totalBill(bills, tips);
}

let bills = [125, 555, 44];
let tips = [];
calcTips(bills, tips);



/*
Your bill is -> 125 
and the tip is ->  18.75
now the total bill = 143.75
Your bill is -> 555
and the tip is ->  83.25
now the total bill = 638.25
Your bill is -> 44
and the tip is ->  6.6
now the total bill = 50.6
*/