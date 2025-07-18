// 1 --> Create an array of numbers and take input from the user to add numbers to this array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr)
// a = prompt("Enter a Number:- ") // prompt only works in browser
// a = "54"
// b = Number.parseInt(a)
// arr.push(b)
// console.log(arr)

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let ar = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log("Original array:", ar);
//
// rl.question("Enter a number: ", (input) => {
//     let b = Number.parseInt(input);
//     ar.push(b);
//     console.log("Updated array:", ar);
//     rl.close(); // Close the input stream
// });

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Wrap question in a promise
function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log("Original array:", arr);

    const input = await askQuestion("Enter a number: ");
    const b = Number.parseInt(input);
    arr.push(b);

    console.log("Updated array:", arr);
    rl.close();
}

main();

// 2 --> Keep adding numbers to the array in 1 until 0 is added to the array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let a = 5;

do {
    arr.push(a);
    a--;
}while(a != 0);
console.log(arr)

// 3 --> Filter for numbers divisible by 10 from a given array.

let arr2 = [1, 20, 3, 4, 5, 6, 7, 80, 9, 100, 11, 120, 13, 140, 150, 16, 17, 180, 19, 20]
let newArr2 = arr2.filter((element) => {
    return element % 10 === 0
})
console.log(newArr2)

// 4 --> Create an array of square of given numbers.

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr3 = arr3.map((x)=>{
    return x*x;
})
console.log(newArr3);

// 5 --> Use reduce method to calculate factorial of a given number from an array of first n natural numbers.
// (n being the number whose factorial needs to be calculated).

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8]
let newArr4 = arr4.reduce((n1, n2)=> {
    return n1 * n2
})
console.log(newArr4)
