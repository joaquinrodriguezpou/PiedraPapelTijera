console.log('Lets play Rock, Paper, Scissor');

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

// a function that runs the others functions together with a condition.

function game() {

    // while (playerscore < 3 && computerscore < 3) { // For now, remove the logic that plays exactly five rounds.

    function getComputerSelection(){
        return options[getRandomNumber()];
    }

    buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => button.addEventListener('click', function(e){

    scoreCounter(story.textContent = whoWins(getComputerSelection(), e.target.classList.toString().toLowerCase()));

    computerscoreScreen.textContent = `computer score: ${computerscore}`;
    playerscoreScreen.textContent = `player score: ${playerscore}`;
    }));    

    const results = document.querySelector('#results');
    const scoreScreen = document.createElement('div');
    scoreScreen.classList.add('scores')
    results.appendChild(scoreScreen);

    const computerscoreScreen = document.createElement('div');
    computerscoreScreen.textContent = `computer score: ${computerscore}`;
    scoreScreen.appendChild(computerscoreScreen);

    const playerscoreScreen = document.createElement('div');
    playerscoreScreen.textContent = `player score: ${playerscore}`;
    scoreScreen.appendChild(playerscoreScreen);
    let story = document.createElement('div');
    story.classList.add('story')
    results.appendChild(story);
 


    if (playerscore == 3 || computerscore == 3) {
        if (playerscore === 3) {
            story.textContent = 'You have won';
        } else {
            story.textContent = 'The computer has won';
        }
        
        let playagain = prompt('Do you want to play again? (yes/no)').toLowerCase();
        
        if (playagain === 'yes') {
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

console.log(game())