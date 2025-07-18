// nn bb ss u --> null, number, boolean, bigInt, string, symbol, undefined
// This all are Primitives in JS

let a = null;
let b = 43;
let c = true;   // can also be false
let d = BigInt("34") + BigInt("6")
// let d = 123n
let e = 'hello'
let f = Symbol('hello')
let g = undefined
// let g    This is also Undefined

console.log(a, b, c, d, e, f, g)

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)

// Non-Primitive data types - Objects in JS

const item = {      // In Python, this is called dictionary
    "Ranjit": true,     // In JS this is called an object
    "Elon": false,
    "Jeff": 344,
    "Mark": undefined
}

console.log(item["Ranjit"])
console.log(item["ghfh"])   // If this is not there in the item, it will print undefined
console.log(item["Elon"])
console.log(item["Jeff"])
console.log(item["Mark"])