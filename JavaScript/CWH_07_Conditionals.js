// let a = prompt("Hey what's your age:- ")     // prompt is only work in browser

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// readline.question("Hey what's your age:- ", (a) => {
//     console.log(a);
//     readline.close();
// });                                                      // This is used to take input in IDE's

// readline.question("Hey what's your age:- ", (a) => {
//     console.log("You entered:", a);
//
//     // ✅ Code here runs after input is received
//     console.log("This is after readline");
//
//     readline.close();
// });

a = "34"
console.log(typeof a);
b = Number.parseInt(a)             // Converting the string to a number
console.log(typeof b);

// if - else statement
if(b<0){
    console.log("This is a invalid age");
}
else if(b>0 && b<9){
    console.log("You are a kid and you cannot even think of driving")
}
else if(b>=9 && b<18){
    console.log("You are a kid and you can think of driving after 18")
}
else{
    console.log("You can now drive as you are above 18");
}

console.log("Done");


// Switch case statement
/*
switch ("papayas"){
    case "mango":
        console.log("Mango is a India's national fruit");
        break;
    case "apple":
        console.log("An Apple a day keeps the doctor away");
        break;
    case"papayas":
        console.log("Papayas is a 250 rupees kg");
        break;
    default:
        console.log("Sorry we are out of this fruit")
}
*/

// Ternary operator (?) is a shortcut to print

c = 3
console.log("You can", c<18? "not drive" :"drive")
// console.log("You can", (c<18? "not drive" :"drive")) --> this syntax is also valid
// If age is less than 18, then it will print "not drive" with "you can" if not, then it will print "drive" with "you can"
c = 65
console.log("You can", c<18? "not drive" :"drive")

marks = 23
// console.log(marks>=60? "You are a pass": "You are fail") --> This is also a valid syntax
console.log("You are", marks<=35? "Fail": "Pass")
