const hello = () => {
    console.log("Hello how are you, I am fine")
}

function onePlusavg(a, b) {
    // return 1 + (a + b) / 2
    return Math.round(1 + (a + b) / 2)  // Use Math.round(), If you want to remove number after point
}

const sum = (p, q) =>{
    return p + q;
}   // This is called Arrow function


let a = 1;
let b = 2;
let c = 3;

/*
console.log("The average of a and b is ", 1 + (a + b) / 2)
console.log("The average of a and b is ", 1 + (b + c) / 2)
console.log("The average of a and b is ", 1 + (a + c) / 2)
*/
// This is how we have to write it many times, if we create a function, then not

console.log("The average of a and b is ", onePlusavg(a, b))
console.log("The average of a and b is ", onePlusavg(b, c))
console.log("The average of a and b is ", onePlusavg(a, c))
// These three lines are printed by using a function


let p = 43;
let q = 75;
console.log("The sum of p and q is ", sum(p, q))

hello();
