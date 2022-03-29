/*set scores to 0*/
let userScore = 0;
let compScore = 0;
/*creating variables to show user and comp score count */
var userScoreCount = document.getElementById('userCount');
var compScoreCount = document.getElementById('compCount');
/* variables to announce the choices */
var uAnnounce = document.getElementById('uChoice');
var cAnnounce = document.getElementById('cChoice');
/* announces winner */
let winner = document.querySelector('.announcer');
let div = document.createElement('div');
/*display user and computer choice images in the boxes on the top of the screen */
const ubox = document.querySelector('#userDisplay');
let uImg = document.createElement('div');
ubox.appendChild(uImg);
const cbox = document.querySelector('#compDisplay');
let cImg = document.createElement('div');
cbox.appendChild(cImg);

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

    uAnnounce.textContent = `YOU CHOSE: ${playerSelection}`;


    cAnnounce.textContent = `PC CHOSE: ${computerSelection}`;

  
    if (playerSelection === computerSelection) {
        let tie = 0;
        return tie;
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return false;
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return true;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return true;
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        
        return false;
    }
    else if (playerSelection === "SCISSORS" && computerSelection == "PAPER") {
        return true;
    }
    else if (playerSelection === "SCISSORS" && computerSelection == "ROCK") {
        return false;
    }
}


function uDisplay(uChoice) {
    uImg.className = '';
    console.log(uChoice);
    uImg.classList.add(uChoice);

}

function cDisplay(cChoice) {
    cImg.className = '';
    console.log(cChoice);
    cImg.classList.add(cChoice);

}


function game (userChoice) { //plays the game for 5 rounds and keeps track of score


    //when each player has a score lower than 5, the game commences.
    if ((userScore < 5) && (compScore < 5)) {
        uDisplay(userChoice);
        let computerSelection = computerPlay();
        cDisplay(computerSelection);
        let winner = playRound(userChoice, computerSelection);
        
        if (winner === true) {
            userScore += 1;
            userScoreCount.textContent = `${userScore}`;
            if (userScore === 5) {
                conclusion(userScore, compScore);
            } 
        }
        else if (winner === false) {
            compScore += 1;
            compScoreCount.textContent = `${compScore}`;
            if (compScore === 5) {
                conclusion(userScore, compScore);
            }
        }
        else if (winner == 0 ) {  
        }
    }

}

function conclusion(userScore, compScore) {

    
    div.classList.add('winnerAnnouncement');

    if (userScore > compScore) {
        div.textContent = "USER WINS";
        winner.appendChild(div);
        //playAgain();
    }
    else if (compScore > userScore) {
        div.textContent = "PC WINS";
        winner.appendChild(div);
        //playAgain();
    }
    else {
        div.textContent = "IT'S A TIE";
        winner.appendChild(div);
        //playAgain();
    }
}

/*function playAgain() {
    let playAgain = document.querySelector('.announcer');
    let p = document.createElement('div');
    p.classList.add('playAgain');
    p.textContent = 'Play Again?';
    playAgain.appendChild(p);

    let btns = document.querySelector('.buttons');
    let btnYes = document.createElement("button");
    btnYes.textContent = "Yes";
    btnYes.classList.add('playAgainBtn');
    btns.appendChild(btnYes);
    btnYes.addEventListener('click', () => {
        userScore = 0;
        compScore = 0;
        p.remove();
        btnYes.remove();
        btnNo.remove();
        div.remove();
        uAnnounce.textContent = '';
        cAnnounce.textContent = '';
        userScoreCount.textContent = ``;
        compScoreCount.textContent = ``;
        playGame(userScore, compScore);
    })
    let btnNo = document.createElement("button");
    btnNo.textContent = "No"
    btnNo.classList.add('playAgainBtn');
    btns.appendChild(btnNo);
    btnNo.addEventListener('click', () => {
        p.remove();
        btnYes.remove();
        btnNo.remove();
    
        return;
    })



}
*/

function playGame(userScore, compScore) {

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
    

playGame(userScore, compScore);