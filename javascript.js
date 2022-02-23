

function computerPlay() {
    comp_attack = Math.floor(Math.random() * (3)) + 1;

    if (comp_attack === 1) {
        comp_attack = "ROCK";
    }
    else if (comp_attack === 2) {
        comp_attack = "PAPER";
    }
    else if (comp_attack === 3) {
        comp_attack = "SCISSORS";
    }

    return comp_attack;
}

function userPlay() {
    user_attack = prompt("Rock, paper, or scissors?")
    
    if (user_attack.toUpperCase() === "ROCK") {
        user_attack = "ROCK";
    }
    else if (user_attack.toUpperCase() === "PAPER") {
        user_attack = "PAPER";
    }
    else if (user_attack.toUpperCase() === "SCISSORS") {
        user_attack = "SCISSORS";
    }
    else {
        console.log("I don't understand what you wrote.");
    }

    return user_attack;
    

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`The user input ${playerSelection} and the computer input ${computerSelection}`);
        console.log("It's a tie!");
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log(`The user input ${playerSelection} and the computer input ${computerSelection}`);
        console.log(`Computer wins!`)
        return false;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log(`The user input ${playerSelection} and the computer input ${computerSelection}`);
        console.log('User wins!');
        return true;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log(`The user input ${playerSelection} and the computer input ${computerSelection}`);
        console.log('The user wins!');
        return true;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log(`The user input ${playerSelection} and the computer input ${computerSelection}`);
        console.log('The computer wins!');
        return false;
    }
    else if (playerSelection === "SCISSORS" && computerSelection == "PAPER") {
        console.log(`The user input ${playerSelection} and the computer input ${computerSelection}`);
        console.log('THe user wins!');
        return true;
    }
    else if (playerSelection === "SCISSORS" && computerSelection == "ROCK") {
        console.log(`The user input ${playerSelection} and the computer input ${computerSelection}`);
        console.log('The computer wins!')
        return false;
    }
}

function game () { //plays the game for 5 rounds and keeps track of score
    let userScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i ++) {
        userSelection = userPlay();
        computerSelection = computerPlay();
        score = playRound(userSelection, computerSelection);

        if (score === true) {
            userScore += 1;
        }
        else if (score === false) {
            compScore += 1;
        }


        console.log(`The user has ${userScore} point(s)`);
        console.log(`The computer has ${compScore} point(s)`);
    }

    if (userScore > compScore) {
        console.log('The user wins!');
    }
    else if (compScore > userScore) {
        console.log('The computer wins!');
    }
    else {
        console.log("It's a tie!");
    }
}

game();

