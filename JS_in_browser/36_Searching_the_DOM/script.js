// Change the card title to red

// let ctitle = document.getElementsByClassName("card-title")[0];
// ctitle.style.color = "red";

// let ctitle = document.getElementById("firstcardtitle");
// dtitle.style.color = "aqua";

let ctitle = document.querySelectorAll(".card-title")
ctitle[0].style.color = "red"
ctitle[1].style.color = "aqua"
ctitle[2].style.color = "green"

let d = document.querySelector(".this");
d.style.background = "red"
d.style.color = "cyan"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"))