// 44;
// "Ranjit Vishwakarma"
// false
// All these three lines are valid in JS

console.log("Operators in JS")

// Arithmetic Operators

let a = 10;
let b = 4;

console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a * b = ", a*b)
console.log("a / b = ", a/b)
console.log("a ** b = ", a**b)  // Exponential operator, this means 45 raise to 4 means = 45x45x45x45 = 4100625
console.log("a % b = ", a%b)    // Modulus operator, it shows the remainder
// console.log("a++ = ", a++)      // a++ increment the value after printing the value of a (always only 1 will add)
// console.log("a = ",a)
// console.log("++a = ", ++a)      // ++a will increase the value of a print the value of a (always only 1 will add)
// console.log("a-- = ", a--)
// console.log("++a = ", ++a)      // a = 11
// console.log("a++ = ", a++)      // a = 11, a become 12 here after printing
// console.log("--a = ", --a)      // a = 11
// console.log("a-- = ", a--)      // a = 11, a become 10 here after printing
// console.log("a = ", a)          // a = 10
// console.log("a-- = ", a--)      // a = 10


// Assignment Operators

let assignment = 2;
assignment += 5;    // same as assignment = assignment + 5
console.log("assignment is now = ", assignment)

assignment -= 5;
console.log("assignment is now = ", assignment)

assignment *= 5;
console.log("assignment is now = ", assignment)

assignment /= 5;
console.log("assignment is now = ", assignment)

// Comparison Operator

let comp1 = 6;
let comp2 = "6";

console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)

// Logical Operators

let x = 5;
let y = 6;
console.log(x<y && x!=y)    // In && operator TT = T, TF = F, FT = F, FF = F
                            // In && operator, If both conditions is True then only it will return true
console.log(x<y || x==y)    // In || (or or) operator, if any one condition is true then it will return true
console.log(!true)          // This is not operator (!)
console.log(!false)

// Comments

// This is a single-line comment
/*
This is an example of multi line comment.
This is a Js tutorial.
 */
