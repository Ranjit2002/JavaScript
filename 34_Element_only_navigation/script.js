const changebgred = () => {
    document.body.firstElementChild.style.background = "red"
}

changebgred()

let b = document.body
console.log("First child of b is:", b.firstChild)

console.log("First Element of b is:", b.firstElementChild)