// console.log('Happy developing ✨')
// console.log("Hello World!'''")

function addThreeNumbers(a, b, c){
    return a + b + c
}

// let a = addThreeNumbers(30, 50, 50)
// console.log(a)

function addThreeNumbers(a, b, c){
    console.log(`The sum of ${a} + ${b} + ${c} = ${a + b + c}`)
}

addThreeNumbers(98, 45, 5)

function printTable(n){
    for(let i=1; i<=10; i++){
        console.log(`${n} X ${i} = ${n*i}`);    //---------  "It's a syntax to print table"
    }
}

printTable(7)
console.log()

let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);  //----- "It's a syntax to print table"
}

let num1 = 1954
let i = 1;
while (i <= 10){
    console.log(`${num1} x ${i} = ${num1 * i}`);
    i+=1;
}
