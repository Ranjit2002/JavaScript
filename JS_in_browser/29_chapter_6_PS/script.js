/* 1, 2, 3. Write a program using prompt function to take input of age as a value from the user
        and use alert to tell him if he can drive!. */

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

// let runAgain = true;     // Make it true if you want to run this program.
let runAgain = false;

while (runAgain) {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);

    if (age < 0) {
        console.error("Please enter a valid age")
        break;
    }

    if (canDrive(age)) {
        alert("Yes you can drive")
    }
    else {
        alert("You cannot drive")
    }
    runAgain = confirm("Do you want to play again?")
}

// 4. Write a program to change the url to google.com (Redirection). If users enters a number greater than 4.

// let num = prompt("Enter a number");
// num = Number.parseInt(num);

// if (num <= 4) {
//     alert(`You entered ${num}`)
// }
// else if (num >= 4) {
//     location.href = "https://google.com"
// }
// else {
//     alert("Please enter a valid number")
// }

// 5. Change the background of the page to yellow, red or any other color based on user input through prompt.

let color = prompt("Enter a color to change the background")

document.body.style.background = color;