// For loop

// Program to add first n natural numbers
/*
let sum = 0;
let nat_num = 4

for (let i=0; i<nat_num; i++) {
    sum += (i+1);
    // console.log((i+1), "+")
}
*/
// console.log(`The sum of ${nat_num} natural numbers is ${sum}`)
// console.log("Sum of first", nat_num, "natural numbers is:- ", sum)

// Quick quiz --> Write a program to find factorial
/*
let factor = 1
let n = 4
for(let i=1; i<=n; i++){        // This program will multiply 1 x 2 x 3 x 4
    factor *= i
}

console.log("The factor of", n , "is:- ", factor)
*/


let obj = {
    Ranjit: 90,
    Steve: 80,
    Aman: 70,
    Jeff: 60,
    Mark: 50
}

// For in loop
for (let a in obj) {
    console.log("Marks of " + a + " are ", obj[a])
}

// For of loop
for (let b of "Ranjit") {
    console.log(b)
}
