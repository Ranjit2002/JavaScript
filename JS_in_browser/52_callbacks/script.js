// Synchronous programming 

// let a = prompt("What is your name?")
// let b = prompt("What is your age?")
// let c = prompt("What is your favourite color?")
// console.log(a + " is " + b + " years old and has " + c + " favourite color");

// Asynchronous programming

// console.log("Start")
// setTimeout(function () {
//     console.log("Hey I am good!")
// }, 3000)
// console.log("End")

// Callbacks

function loadScript(src, Callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        Callback(null, src);
    }
    script.onerror = function () {
        console.log("Error loading script with SRC: " + src);
        Callback(new Error("SRC got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert(" Hello World! " + src)
}

function goodMorning(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert(" Good Morning " + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", goodMorning)

