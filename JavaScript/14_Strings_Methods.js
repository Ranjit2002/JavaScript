// let name = "Ranjit\""   // \" Escape sequence character. It will increase the length of the string
let name = "Ranjit"
console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.slice(2, 4))   // It will print characters from index 2 to 4-1.

console.log(name.slice(2))  // It will print characters after index 2.

console.log(name.replace("jit", "jeet"))
// If "jit" was not there in your string. It will not show an error

let friend = "Naman"

// console.log(name.concat(" is a friend of ", friend))
console.log(name.concat(" is a friend of ", friend, " ok"))

let friend2 = "         Meena             "

console.log(friend2)
console.log(friend2.trim()) // trim() method is used to remove spaces.

let fr = "Shivika"

// console.log(fr[0])
// console.log(fr[1])
// console.log(fr[2])
// console.log(fr[3])
// console.log(fr[4])
// console.log(fr[5])
// console.log(fr[6])


let a = "Material"

for (let i=0; i<a.length; i++){
    console.log(a[i])
}

