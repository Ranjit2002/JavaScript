// 1 --> Use logical operator to find whether the age of a person lies between 10 and 20.

/*
let age = 16

if (age > 10 && age < 20) {
    console.log("Your age lie between 10 and 20")
}
else {
    console.log("Your age cannot lie between 10 and 20")
}
*/

// 2 --> Demonstrate the use of switch case statements in JavaScript.

const marks = 60

switch(marks){
    case 30:
        console.log("You are fail")
        break;
    case 40:
        console.log("You are just pass")
        break;
    case 50:
        console.log("You are pass with 50% marks")
        break;
    case 60:
        console.log("You are pass with 60% marks")
        break;
    case 70:
        console.log("You are pass with 70% marks")
        break;
    default:
        console.log("You are passed with excellent marks")
}


// 3 --> Write a JavaScript program to find whether a number is divisible by 2 and 3.

/*
let num1 = 12

if (num1 % 2 == 0 && num1 % 3 == 0) {
    console.log("The number is divisible by 2 and 3")
}
else {
    console.log("The number is not divisible by 2 and 3")
}
 */

// 4 --> Write a JavaScript program to find whether a number is divisible by either 2 or 3.

/*
let num2 = 34

if (num2 % 2 == 0) {
    console.log("The number is divisible by 2")
}
else if (num2 % 3 == 0) {
    console.log("The number is divisible by 3")
}
else {
    console.log("The number is not divisible by 2 or 3")
}
*/

// 5 --> Print "You can Drive" or "You cannot Drive"
// based on age being greater than 18 using the ternary operator.


// let a = 15
// console.log("You can", a<18? "not Drive": "Drive")
// let b = 23
// console.log("You can", b<18? "not Drive": "Drive")

let age = 19
let c = age>18? "You can Drive" : "You cannot Drive"
console.log(c)