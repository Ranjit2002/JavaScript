/*
Write a JavaScript program to generate a random number and store it in a variable.
The program then takes an input from the user to tell them whether the guess
was correct, greater or lesser than the original number.
100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed.
The number should be between 1 - 100

let number = 0  // Generate random number here
let chances = 0
keep asking for the number until the correct number is guessed
Increment the chance variable
Eventually after the game is over, display the (100 - Number of chances) and the actual number.
 */

// let number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
// let chances = 0;
// let guess;
//
// do {
//     guess = prompt("Guess a number between 1 and 100:");
//     guess = Number.parseInt(guess);
//     chances++;
//
//     if (guess > number) {
//         alert("Too high! Try a lower number.");
//     } else if (guess < number) {
//         alert("Too low! Try a higher number.");
//     } else if (guess === number) {
//         alert("Congratulations! You guessed the correct number.");
//         break;
//     } else {
//         alert("Invalid input. Please enter a valid number.");
//     }
// } while (guess !== number);
//
// let score = 100 - chances;
// alert(`You guessed the number in ${chances} attempts.`);
// alert(`Your score is: ${score}`);
// alert(`The correct number was: ${number}`);


// const readline = require("readline");
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let number = Math.floor(Math.random() * 100) + 1;
// let chances = 0;
//
// function askGuess() {
//     rl.question("Guess a number between 1 and 100: ", (input) => {
//         let guess = parseInt(input);
//         chances++;
//
//         if (isNaN(guess)) {
//             console.log("Please enter a valid number.");
//             askGuess();
//         } else if (guess > number) {
//             console.log("Too high! Try a lower number.");
//             askGuess();
//         } else if (guess < number) {
//             console.log("Too low! Try a higher number.");
//             askGuess();
//         } else {
//             console.log("🎉 Congratulations! You guessed the correct number.");
//             let score = 100 - chances;
//             console.log(`You guessed it in ${chances} attempts.`);
//             console.log(`Your score is: ${score}`);
//             console.log(`The correct number was: ${number}`);
//             rl.close();
//         }
//     });
// }
//
// askGuess();


// Without using isNan

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number = Math.floor(Math.random() * 100) + 1;
let chances = 0;

function askNum() {
    rl.question("Guess a number between 1 and 100: ", (input) => {
        const guess = Number.parseInt(input);
        chances++;

        if (input.trim() === "" || !/^\d+$/.test(input)) {
            console.log("❌ Invalid input. Please enter a valid number.");
            askNum();
        } else if (guess > number) {
            console.log("Too high! Try a lower number.");
            askNum();
        } else if (guess < number) {
            console.log("Too low! Try a higher number.");
            askNum();
        } else {
            console.log("🎉 Congratulations! You guessed the correct number.");
            const score = 100 - chances;
            console.log(`You guessed it in ${chances} attempts.`);
            console.log(`Your score is: ${score}`);
            console.log(`The correct number was: ${number}`);
            rl.close();
        }
    });
}

askNum();


