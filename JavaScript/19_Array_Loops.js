let num = [3, 5, 1, 2, 4]

// For loop
// for (let i=0; i<num.length; i++) {
//     console.log(num[i])
// }

// For...of loop
// for (let i of num) {
//     console.log(i)
// }

// For...in loop
for (let i in num) {
    console.log(num[i])
}


num.forEach((element) => {
    console.log(element * element)
})

let name = "Ranjit"
let arr = Array.from(name)  // Here Array.from() method is converting String into Array.
console.log(arr)

