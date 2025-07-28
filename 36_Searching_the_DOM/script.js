// Change the card title to red

// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"

// let ctitle = document.getElementById("firstcardtitle")
// ctitle.style.color = "red"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "red"
ctitles[1].style.color = "aqua"
ctitles[2].style.color = "green"
console.log(ctitles)

document.querySelector(".this").style.color = "red"
document.querySelector(".this").style.background = "aqua"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"))
