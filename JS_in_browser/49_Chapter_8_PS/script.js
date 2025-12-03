// 1 --> Write a program to show different alerts when different button are clicked

// 2 --> Create a website which is capable of storing bookmarks of your fovorite websites using href

// 3 --> Repeat Q2 using event Listeners.

document.getElementById("google").addEventListener('click', function () {
    window.location = "https://google.com"
    win.focus();
})

document.getElementById("replit").addEventListener('click', function () {
    window.location = "https://replit.com"
    win.focus();
})

document.getElementById("bootstrap").addEventListener('click', function () {
    window.location = "https://getbootstrap.com"
    win.focus();
})

// 4 --> Write a javascript program to keep fetching contents of a website (Every 5 seconds)]

const fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json();
    return a;
}

// setInterval(async function () {
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// }, 3000);

// 5 --> Create a glowing bulb effect using classlist toggle method in JavaScript

setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb");
}, 300);

