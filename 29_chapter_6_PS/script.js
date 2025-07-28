const canDrive = (age) => {
    return age >= 18 ? true : false
}

let runAgain = true;

while (runAgain) {

    let age = prompt("Enter your age:- ")
    age = Number.parseInt(age);
    if (age < 0) {
        console.error("Please enter a valid age")
        break;
    }
    if (canDrive(age)) {
        alert("You can drive")
    }
    else {
        alert("You cannot drive")
    }
    runAgain = confirm("Do you want to play agian?")
}

