let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.length)
delete num[0]
console.log(num)
console.log(num.length)

let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];

let num_even_more = [121, 212, 213, 214, 215, 216, 217, 218, 219];

// let newArray = num.concat(num_more)  // .concat() method merge two or more than Array.
// console.log(newArray)                // Returns a new Array.Does not change the existing Array.
// console.log(num, num_more)

let newArray = num.concat(num_more, num_even_more)
console.log(newArray)
console.log(num, num_more, num_even_more)

// sort Method

let a = [34, 56, 76, 23, 123, 7668, 345 ,2328, 57, 45, 89, 923, 64]
a.sort()    // sort() method sort the Array alphabetically.
// Means the number starting with 1 will come first after that the number starting with 2 comes after that 3 and so on till 9
console.log(a)

let compare = (a, b) => {   // This will sort the Array in Ascending order
    return a - b;
}

// let compare = (a, b) => {    // This will sort the Array in descending order
//     return b - a;
// }

// a.sort(compare)     // Compare function is made for Ascending order sorting
// console.log(a)
//
// a.reverse()     // This will reverse the Array
// console.log(a)

let num1  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
num1.splice(2, 3, 1024, 1025, 1026, 1027, 1028)
// splice() method returns deleted items modifies the Array
console.log(num1)
console.log(num1.length)

let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let newNum = num2.slice(3)
let newNum = num2.slice(3, 7)
console.log(newNum)
