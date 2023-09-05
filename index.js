let playerscore = 0;
let computerscore = 0;
let options = ['rock', 'paper', 'scissor']

// a function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors'.

    function getRandomNumber() {
        return Math.floor(Math.random() * 3);
    }  

// a function that determines and says who wins.

function whoWins(ComputerChoice, playerChoice) {

    if (ComputerChoice === 'rock' && playerChoice.toLowerCase() === 'scissor') {
        return ('you lose')
    } 
    else if (ComputerChoice === 'rock' && playerChoice.toLowerCase() === 'paper'){
        return ('you win')
    }
    else if (ComputerChoice === 'paper' && playerChoice.toLowerCase() === 'rock'){
        return ('you lose')
    }
    else if (ComputerChoice === 'paper' && playerChoice.toLowerCase() === 'scissor'){
        return ('you win')
    }
    else if (ComputerChoice === 'scissor' && playerChoice.toLowerCase() === 'paper'){
        return ('you lose')
    }
    else if (ComputerChoice === 'scissor' && playerChoice.toLowerCase() === 'rock'){
        return ('you win')
    }
    else if (ComputerChoice.toLowerCase === playerChoice.toLowerCase) {
        return ('its a tie')
    }
    else {
        return ('you can just write rock or paper or scissor, try again')
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
        return('it is a tie');
    }
}

// a function that runs the others functions together with a condition.

function game() {

    while (playerscore < 3 && computerscore < 3) {

    let ComputerSelection = options[getRandomNumber()];
    let playerSelection = prompt('enter rock, paper or scissor');
    scoreCounter(whoWins(ComputerSelection, playerSelection));    
    console.log(whoWins(ComputerSelection, playerSelection));
    console.log('computer score: ' + (computerscore))
    console.log('your score: ' + (playerscore))
    console.log(' ')
    }

    if (playerscore == 3 || computerscore == 3) {
        if (playerscore === 3) {
            console.log('You have won');
        } else {
            console.log('The computer has won');
        }
        
        let playagain = prompt('Do you want to play again? (yes/no)').toLowerCase();
        
        if (playagain === 'yes') {
            playerscore = 0;
            computerscore = 0;
            console.log('');
            console.log("let's play again!");
            console.log('');
            console.log('computer score: ' + (computerscore));
            console.log('your score: ' + (playerscore));
            console.log('');
            game();
        } else {
            return 'jaa';
        }        
    }

}

console.log(game())