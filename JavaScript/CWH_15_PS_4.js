// Q1 --> What will the following print in JavaScript?
            // Console.log("har\"".length)

// console.log("har\"".length)

// Q2 --> Explore the includes, StartsWith and endsWith functions of a string

let a = "Ranjit is a world's richest person"

// console.log(a.includes("of"))
// console.log(a.includes("richest"))
// console.log(a.startsWith("world's"))
// console.log(a.startsWith("Ranjit"))
// console.log(a.endsWith("is"))
// console.log(a.endsWith("Ranjit"))

// const sentence = "The quick brown fox jumps over the lazy dog";
// const word = "fox";
// console.log(`The word ${word} ${sentence.includes(word) ? "is" : "is not "} in the sentence.`)

// Q3 --> Write a program to convert a given string to lowercase

let b = "FIRST MOBILE IS MADE BY MOTOROLA"
console.log(b.toLowerCase())

// Q4 -->

let c = "Please give Rs 1000"
// console.log(c.slice("Please give me Rs".length))
// console.log(c.slice(15))

let str2 = Number.parseInt(c.slice(15))
console.log(typeof str2)


let friend = "Deepika"
friend[3] = "r"
console.log(friend) // friend is not changed because string is immutable