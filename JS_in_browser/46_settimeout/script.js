document.write("Hello")

const sum = (a, b, c) => {
    console.log("I am running " + (a + b + c))
    a + b
}

setTimeout(sum, 2000, 5, 7, 3);

// setInterval(function () {
//     alert("setInterval")
// }, 3000);

// let a = setTimeout(() => {
//     alert("I am inside settimeout")
// }, 5000);

// let b = prompt("Do you want to run the setTimeout?")
// if(b == "n"){
//     clearTimeout(a)     // clearTimeout() is used to cancel the execution of setTimeout()
// }

// console.log(a)