// Q1 --> Write a program to print the marks of a student in an object using for loop
let marks = {
    Ranjit : 98,
    Rohan : 70,
    Akash : 7
}

// Using for loop
// for (let i=0; i<Object.keys(marks).length; i++) {
//     console.log("The marks of ", Object.keys(marks)[i], " are ", marks[Object.keys(marks)[i]])
// }

// Q2
// Using for in loop
for (let key in marks) {
    console.log("The marks of ", key, " are ",marks[key])
}