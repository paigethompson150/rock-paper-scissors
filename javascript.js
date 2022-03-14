let userScore = 0;
let compScore = 0;




//generates a random choice from the computer.
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


//determines whether player or computer wins. if user wins, return true. if comp wins, return false.
function playRound(playerSelection, computerSelection) {

    console.log(`THE USER CHOSE ${playerSelection} AND THE COMPUTER CHOSE ${computerSelection}`);

    if (playerSelection === computerSelection) {
        console.log("IT'S A TIE");
        let tie = 0;
        return tie;
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log(`COMPUTER WINS`)
        return false;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log('USER WINS');
        return true;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        
        console.log('USER WINS');
        return true;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log('COMPUTER WINS');
        return false;
    }
    else if (playerSelection === "SCISSORS" && computerSelection == "PAPER") {
        console.log('USER WINS');
        return true;
    }
    else if (playerSelection === "SCISSORS" && computerSelection == "ROCK") {
        console.log('COMPUTER WINS')
        return false;
    }
}



function game (userChoice) { //plays the game for 5 rounds and keeps track of score


    //when each player has a score lower than 5, the game commences.
    if ((userScore < 5) && (compScore < 5)) {
        let computerSelection = computerPlay();
        let winner = playRound(userChoice, computerSelection);

        if (winner === true) {
            userScore += 1;
            console.log(`THE USER HAS ${userScore} POINT(S)`);
        }
        else if (winner === false) {
            compScore += 1;
            console.log(`THE COMPUTER HAS ${compScore} POINT(S)`);
        }
        else if (winner == 0 ) {
            console.log('IT IS A TIE');
        }
    }

    //announces which user won the game.
    else if (userScore > compScore) {
        console.log('USER WINS THE GAME!');
        return;
    }
    else if (compScore > userScore) {
        console.log('COMPUTER WINS THE GAME');
        return;
    }
    else {
        console.log("IT'S A TIE");
        return;
    }
}



function playGame() {

    //check whether user has clicked button, based on button id. 

    const rock = document.querySelector('#ROCK');
    rock.addEventListener('click', () => {
        playerChoice = 'ROCK';
        game(playerChoice);
        });

    const scissors = document.querySelector('#SCISSORS');
    scissors.addEventListener('click', () => { 
        playerChoice = 'SCISSORS';
        game(playerChoice);
    });

    const paper = document.querySelector('#PAPER');
    paper.addEventListener('click', () => {
        playerChoice = 'PAPER';
        game(playerChoice);
    });
    
    /*var btn = document.querySelectorAll('button');
    for ( var count = 0; count < btn.length; count++)
    {
        btn[count].addEventListener('click', () => {
            console.log(btn.target);
        });
    }
    */
    
}
    

playGame();

