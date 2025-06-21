// Q1 --> Create a variable of type string and try to add a number to it.

let a = "Ranjit"
let b = 45
console.log(a + b)

// Q2 --> Use typeof operator to find the datatype of the string in the last question.

console.log(typeof (a+b))

// Q3 --> Create a const object in JavaScript. Can you change it to hold a number later?

const a1 = {
    name: "Ranjit",
    section: 1,
    isPrincipal: false
}
// a = true     --> This is not possible
// a = {}       --> It is not possible to make an object inside an object
// console.log(c[name])     // This will throw an error
console.log(a1.name)
console.log(a1.section)
console.log(a1["name"])

// Q4 --> Try to add a new key to the cost object in problem 3 were you able to do it.

a1["friend"] = "Steve"   // We can add elements outside the object
console.log(a1)
a1["name"] = "Aman"      // We can also change elements outside the object
console.log(a1)

// Q5 --> Write a JS program to create a word-meaning dictionary of 5 words.

const dict = {
    appreciate: "recognize the full worth of",
    ataraxia: "A state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work"
}

console.log(dict)
console.log(dict.appreciate)
console.log(dict["ataraxia"])
console.log(dict.yakka)