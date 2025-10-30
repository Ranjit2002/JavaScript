/*
Use JavaScript to create a game of Snake, Wate & Gun.
The game should ask you to enter S, W or G. 
The computer should be able to randomly generate S, W or G and declare Win or Loss using alert.
Use confirm and prompt wherever required.
*/

/*
    Win                     Loss

Snake - Water           Snake - Gun
Water - Gun             Water - Snake
Gun   - Snake           Gun   - Water  

*/

let playAgain = true;

while (playAgain) {
    let user = prompt("Enter Snake, Water or Gun").toLowerCase();

    const choices = ["snake", "water", "gun"]
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];

    if (user == "snake") {
        if (computer == "snake") {
            alert(`Game Draw!\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        } else if (computer == "water") {
            alert(`User wins!...\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        } else {
            alert(`Computer wins!...\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        }
    }
    else if (user == "water") {
        if (computer == "snake") {
            alert(`Computer wins!...\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        } else if (computer == "water") {
            alert(`Game Draw!...\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        } else {
            alert(`User wins!...\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        }
    }
    else if (user == "gun") {
        if (computer == "snake") {
            alert(`User wins!...\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        } else if (computer == "water") {
            alert(`Computer wins!...\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        } else {
            alert(`Game Draw!...\nUser Choice: ${user}\nComputer Choice: ${computer}`)
        }
    }
    else {
        alert("Please enter only Snake, Water or Gun")
    }

    playAgain = confirm("Do you want to play again?")

}

