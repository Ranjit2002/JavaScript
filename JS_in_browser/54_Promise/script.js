let promise = new Promise(function (resolve, reject) {
    alert("Hello")
    resolve(56);
});

console.log("Hello one")

setTimeout(function() {
    console.log("Hello two in 2 seconds")
}, 2000);

console.log("Hello three")

console.log(promise);