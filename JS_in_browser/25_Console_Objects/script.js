console.log("log");

console.info("info");

console.warn("warn");

console.error("err")

console.assert("err" != false)

console.assert("err" == false)

console.error("Hey this is an error");

console.assert(5 > 56);

console.assert(555 > 56);

// console.clear();

console.time("ForLoop")

for (let i = 1; i <= 500; i++) {
    console.log("233")
}

console.timeEnd("ForLoop")


console.time("WhileLoop")

let i = 1;
while (i <= 500) {
    console.log(233);
    i++;
}

console.timeEnd("WhileLoop")

