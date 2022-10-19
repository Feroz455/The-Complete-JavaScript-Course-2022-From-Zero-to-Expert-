/**
 * Coding Challenge #1
 * 
 * Mark and Jhon are trying to compare their BMI(BodyMass Index) which is Calculated using the formula BMI = mass / height ** 2 = mass/ (height * height). (mass in kg and height in meter)
 * 
 * 1. Store Mark's and John's mass and height in Variable
 * 2. Calculate both their BMIs using the formula(you can even implement both versions) 
 * 3. Create a boolean variable "markHeightBMI" containing information about whether Mark   has a higher BMI than Jonh
 * TEST DATA 1:Marks weights 78kg and height is 1.69m John weight 92kg and height is 1.95m
 * TEST DATA 2: Marks weight 95kg and height is 1.88m John weight 85kg and height is 1.76m
 */
/**
 * Codding Challege #2
 * Use the BMI Example from Challenge #1, and the code you already wrote and improve it
 * 
 * 
 * 1.Print a nice output the console, saying who has the higher BMI.The message can be either
 * "Mark's" BMI is higher then John's or "John's" BMI is higher then Mark's;
 * 
 * 2. use a template string to include the BMI value is the outputs. Example: "Mark's" BMI
 * (28.3) is higher then John's  (23.9)
 * 
 * Hint: use an if/else statement  
 */



function BMI(height, weight) {
    return (weight / (height ** 2));
}
//TEST DATA 1 
let mark = BMI(1.69, 78);
let john = BMI(1.95, 92);
let markHeightBMI = mark > john;
console.log("Mark's BIM is = " + mark.toFixed(2) + "\nJohn's BIM is = " + john.toFixed(2));
if (markHeightBMI) {
    console.log("Mark has higher BIM then John");
}
else {
    console.log("Mark has lower BIM then John");
}
mark = BMI(1.88, 95);
john = BMI(1.76, 85);
markHeightBMI = mark > john;
console.log("Mark's BIM is = " + mark.toFixed(2) + "\nJohn's BIM is = " + john.toFixed(2));
if (markHeightBMI) {
    console.log(`Mark ${BMI(1.88, 95)} Heigher then John ${BMI(1.76, 85)}`);

}
else {
    console.log(`John ${BMI(1.76, 85).toFixed(2)} Heigher then  Mark ${BMI(1.88, 95).toFixed(2)}`);

}

/*
Mark's BIM is = 27.31
John's BIM is = 24.19
Mark has higher BIM then John
Mark's BIM is = 26.88        
John's BIM is = 27.44       
*/