let arr = [45, 23, 21]
// console.log(arr)

// We use forEach loop when we have to do any operation on an array
// arr.forEach((value) => {
//     console.log(value)
// })

// map will print all the elements of an array. map method makes a new array's existing elements
// arr.map((value) => {
//     console.log(value)
// })

// let a = arr.map((value) => {
//     console.log(value)
//     return value + 1
// })
// console.log(a)

// Array map() method
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a)

// Array filter() method
// filter() method --> Filters an array with values that passes a test. Creates a new Array.
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((element) => {
    return element < 10
})
// console.log(a2)

// Array reduce() method
let arr3 = [1, 2, 3, 5, 2, 1]
// let newArr3 = arr3.reduce((h1, h2) => {
//     return h1 + h2
// })
// console.log(newArr3)

const reduce_func = (h1, h2) => {
    return h1 + h2
}

let newArr3 = arr3.reduce(reduce_func)
console.log(newArr3)
