
/* Use JavaScript to create a game of Snake, Water and Gun. 
The game should ask you to enter Snake, Water or Gun.
The computer should be able to randomly generate Snake, Water or Gun 
and declare win or loss using alert.
Use confirm and prompt wherever  required.
1 -- Gun > Snake   ==  Gun wins
2 -- Water > Gun   ==  Water wins
3 -- Snake > water ==  Snake wins 

1 - Gun
2 - Water
3 - Snake

*/

function computerChoice() {
    const choices = ["snake", "water", "gun"]
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// let computer = Math.random() * 4;    // It will generate random number between 1 and 3
let runAgain = true;



while (runAgain) {
    let user = prompt("Enter snake, water or gun:").toLowerCase();
    const computer = computerChoice();

    if (user === "gun") {                            // User enter Gun here
        if (computer === "gun") {            // Computer choose Gun here
            alert(`Game Draw!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
        else if (computer === "water") {     // Computer choose Water here
            alert(`Computer wins!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
        else {                                      // Computer choose Snake here
            alert(`You win!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
    }
    else if (user === "water") {                     // User enter Water here
        if (computer === "gun") {            // Computer choose Gun here
            alert(`You win!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
        else if (computer === "water") {     // Computer choose Water here
            alert(`Game Draw!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
        else {                                      // Computer choose Snake here
            alert(`Computer wins!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
    }
    else if (user === "snake") {                     // User enter Snake here
        if (computer === "gun") {            // Computer choose Gun here
            alert(`Computer wins!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
        else if (computer === "water") {     // Computer choose Water here
            alert(`You win!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
        else {                                      // Computer choose Snake here
            alert(`Game Draw!\nComputer choose: ${computer}\nYou Choose: ${user}`)
        }
    }
    else {
        alert("Invalid input. Plese enter only Snake, Water and Gun")
    }
    runAgain = confirm("Do you want to play again?")
}

