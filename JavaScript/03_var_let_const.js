console.log("JavaScript tutorial 3: let, var and const")
// var a = 56
// var b = "Ranjit"
// var c = null
// var d = undefined

let a = 56
// let a = 4                // We cannot re-declare let
// a = 4                    // But we can do like this
let b = "Ranjit"
let c = null
let d = undefined
const author = "Elon"       // Constant cannot be changed
// author = 5                     // Throws an error because constant cannot be changed

console.log(author)
console.log(a)

// Note: - Don't use var, use let and const'

// {
//     var b = "this"
//     console.log(b)       // If we use var, then it will print "this"
// }
// console.log(b)

{
    let b = "this"
    console.log(b)      // If we use let, then it will print the statement inside the block
}
console.log(b)


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Enter your name: ", function(name) {
//     console.log("Hello, " + name);
//     rl.close();
// });

rl.question("Enter your name:- ", (name) => {
    console.log(`Hello, ${name}`);
    rl.close();
});
