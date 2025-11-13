// 1. Create a Navbar and change the color of its first element to red.

let f1 = document.getElementById("first");
f1.style.color = "red";                      

// document.getElementById("first").style.color = "red"     // We can do like this also


// 2. Create a table without tbody. Now use "View page source" button
//      to check weather it has a tbody or not.

// Answer == No

// 3. Create an element with three children. Now change the color of first and last element to green.

let g1 = document.querySelectorAll(".grn");
g1[0].style.color = "green"
g1[1].style.color = "green"


// 4. Write a JavaScript program to change background of all <li> tags to cyan.

// let c1 = document.getElementsByClassName("nav")[0];
// c1.style.backgroundColor = "cyan"                        // We can change the background color like this

// let c1 = document.querySelectorAll(".items");
// c1[0].style.backgroundColor = "cyan"
// c1[1].style.backgroundColor = "cyan"
// c1[2].style.backgroundColor = "cyan"
// c1[3].style.backgroundColor = "cyan"     // Method - 1

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = "cyan"
})  
        // Method - 2