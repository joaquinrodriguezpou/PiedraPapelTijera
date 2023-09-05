const title = document.getElementById('title');
title.textContent = 'Lets play Rock, Paper, Scissor';

let playerscore = 0;
let computerscore = 0;
let options = ['rock', 'paper', 'scissor']

// a function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors'.

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
    }          

// a function that determines and says who wins.

function whoWins(ComputerChoice, playerChoice) {

    if (ComputerChoice === 'rock' && playerChoice === 'scissor') {
        return ('you lose')
    } 
    else if (ComputerChoice === 'rock' && playerChoice === 'paper'){
        return ('you win')
    }
    else if (ComputerChoice === 'paper' && playerChoice === 'rock'){
        return ('you lose')
    }
    else if (ComputerChoice === 'paper' && playerChoice === 'scissor'){
        return ('you win')
    }
    else if (ComputerChoice === 'scissor' && playerChoice === 'paper'){
        return ('you lose')
    }
    else if (ComputerChoice === 'scissor' && playerChoice === 'rock'){
        return ('you win')
    }
    else {
        return ('its a tie')
    }
}

// a function that counters each player score.

function scoreCounter(result) {
    if (result === 'you lose') {                  
        return computerscore += 1;
    }
    else if (result === 'you win') {
       return playerscore += 1;
    }
    else {
        return;
    }
}

function gameOver(){
    if (playerscore === 3 || computerscore === 3) {
        if (playerscore === 3) {
            story.textContent = 'You have won';
        } else {
            story.textContent = 'The computer has won';
        }
        playAgain.style.display = 'block';
        playAgainYes.addEventListener('click', function (){
            playerscore = 0;
            computerscore = 0;
            computerscoreScreen.textContent = `computer score: ${computerscore}`;
            playerscoreScreen.textContent = `player score: ${playerscore}`;
            playAgain.style.display = 'none';

            game();
        });
    }
    else {return}
}

    const results = document.getElementById('results');
    const scoreScreen = document.querySelector('.score');
    const computerscoreScreen = document.querySelector('.computerScore');
    const playerscoreScreen = document.querySelector('.playerScore');
    let story = document.querySelector('.story');
    const playAgain = document.querySelector('.playAgain');
    const playAgainYes = document.getElementById('playAgainYes');
    const playAgainNo = document.getElementById('playAgainNo');
    buttons = Array.from(document.querySelectorAll('button'));


// a function that runs the others functions together with a condition.

function game() {

    //while (playerscore < 3 && computerscore < 3) { // For now, remove the logic that plays exactly five rounds.

    buttons.forEach(button => button.addEventListener('click', function(e){
    scoreCounter(story.textContent = whoWins(options[getRandomNumber()], e.target.classList.toString().toLowerCase()));
    computerscoreScreen.textContent = `computer score: ${computerscore}`;
    playerscoreScreen.textContent = `player score: ${playerscore}`;
    gameOver();
    }));    

    

    if (playerscore === 3 || computerscore === 3) {
        if (playerscore === 3) {
            story.textContent = 'You have won';
        } else {
            story.textContent = 'The computer has won';
        }
        

        // playAgainPara.textContent = 'Do you want to play again?';
        
        if (playAgainYes) {
            playerscore = 0;
            computerscore = 0;
            story.textContent = "let's play again!" ;
            computerscoreScreen.textContent = `computer score: ${computerscore}`;
            playerscoreScreen.textContent = `player score: ${playerscore}`;
            game();
        } else {
            story.textContent = 'jaa';
        }        
    }
}


game();