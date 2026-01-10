// 1 ==> Write a JavaScript program to print the following after 2 second delay
//  Hello
//  World



const a = async (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 2000);
    })
}

// (
//     async () => {
//         let b = await a("Hello");
//         console.log(b)
//         b = await a("World");
//         console.log(b);
//     }
// )()



// 2 ==> Write a JavaScript program to find average of numbers in an array using spread syntax.

function sum(x, y, z) {
    return x + y + z;
}

let num = [3, 6, 8]

// console.log(sum(...num) / 2);



// 3 ==> Write a JavaScript function which resolves a Promise after n seconds. The function
//     takes n as the parameter. Use an IIFE to execute the functions with different values of n.

const p = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000 * n);
    })
}

// (
//     async () => {
//         let a = await p("I am resolving afer 1 second", 1);
//         console.log(a);
//         a = await p("I am resolving afer 4 second", 4);
//         console.log(a);
//         a = await p("I am resolving afer 2 second", 2);
//         console.log(a);
//     }
// )()



// 4 ==> Write a simple interest calculator using JavaScript

function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

// console.log(simpleInterest(1000, 5, 1));