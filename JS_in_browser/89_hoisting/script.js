// Following two lines run successfully due to JavaScript hoisting 
console.log(a);

greet();

function greet () {
    console.log("Good Morning")
}

// let a = 9;   
// const a = 9;
var a = 9;          // Declaration hoisted to the top but initialization is not 
console.log(a);

