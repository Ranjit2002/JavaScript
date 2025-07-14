// Array Methods

let a = [1,2,34,4,];
let b = a.toString();   // now b is string
console.log(b, typeof b)

let c = a.join(" and ")
console.log(c, typeof c)

// let r = a.pop() // pop() method will remove the last element of Array. r will return the pop element
// console.log(a, r)

// let d = a.push(56)  // push() method will add 56 in an Array. Push returns the new array length
// console.log(a, d)

// let r = a.shift()   // Shift will remove the first element
// console.log(r, a)

let r = a.unshift(79)   // It will add 79 on the first index
console.log(r, a)

