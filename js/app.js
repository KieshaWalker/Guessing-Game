/* PSEUDOCODE

define a variable for users input
define a variable for the random number
define a variable for the game message
create variables to store user input and feedback
let userInput;
let feedbackMessage;

assign values to them


Create a function to generate a random number between 1 and 100
set max number of guesses to 10
initialize number of attempts to 0

HTML
HOW TO instructions in html 
display input field for user guesses
display submit button in 
display area for feedback messages  
display remaining guess

event listeners 
user clicks submit button
the event listener calls a function to handle the guess input (assigns the users choice to teh variable user input)

using a random number generator to assign the computers number to be guessed 
render () game message to dom
increment number of attempts
compare user choice to the computers choice. 


GAME LOGIC
IF guess is equal to the random number:
Display "You guessed it!"
Disable input and button
Offer "Play Again" option

ELSE IF guess is too high:
Display "Too high!"
Update remaining guesses

ELSE IF guess is too low:
Display "Too low!"
Update remaining guesses

IF guess count reaches max guesses:
Display "Game over. The number was [correct number]"
Disable input and button
Offer "Play Again" option

RESET FUNCTION
When "Play Again" is clicked:
 Generate new random number
 Reset guess count to 0
Clear input and feedback
Re-enable input and button

*/

let feedbackMessage = '';

const maxGuesses = 10;
let attempts = 0;

let randomNumber = Math.floor(Math.random() * 100) + 1;

let gameDisabled = false;

function disableGame() {
    document.getElementById('user-input').disabled = true;
    document.getElementById('submit-btn').disabled = true;
    gameDisabled = true;
}

let remainingGuesses = maxGuesses - attempts;

function render(remainingGuesses) {
    document.getElementById('remaining-guesses').innerText = remainingGuesses;
   
}


const userInput = document.getElementById('submit-btn').addEventListener('click', handleGuess);
console.log(`Random number to guess: ${randomNumber}`);

function handleGuess() {
    const guessInput = Number(document.getElementById('user-input').value);
    attempts++;
    let remainingGuesses = maxGuesses - attempts;
    console.log(`Number of attempts: ${attempts}`);
    console.log(`User guessed: ${guessInput}`);

    render(remainingGuesses);

    if (guessInput === randomNumber) {
        feedbackMessage = "WOAHHHHHH, You guessed it!";
        document.getElementById('feedback').innerText = feedbackMessage;
        disableGame();
        resetGameWon();

    } else if (guessInput > randomNumber) {
        feedbackMessage = "Too high!";
        document.getElementById('feedback').innerText = feedbackMessage;
    } else {
        feedbackMessage = "Too low!";
        document.getElementById('feedback').innerText = feedbackMessage;
    }
    if (attempts >= maxGuesses) {
        feedbackMessage = `Game over. The number was ${randomNumber}`;
        document.getElementById('feedback').innerText = feedbackMessage;
        disableGame();
        resetGame();
    }
}

function resetGame() {
    if (gameDisabled) {
        const gameOverContainer = document.getElementById('game-over');
        const gameOverMessage = document.getElementById('game-over-message');
        const restartButton = document.getElementById('restart-btn');
        feedbackMessage = 'Try Again?';
        gameOverMessage.innerText = feedbackMessage;
        gameOverContainer.style.display = 'flex';
        restartButton.style.display = 'flex';
    }
 
}

function resetGameWon() {
    const guessInput = Number(document.getElementById('user-input').value);

    if (gameDisabled && guessInput === randomNumber) {
        const gameOverContainer = document.getElementById('game-over');
        const gameOverMessage = document.getElementById('game-over-message');
        const restartButton = document.getElementById('restart-btn');
        feedbackMessage = 'GREAT JOB!! Play again?';
        gameOverMessage.innerText = feedbackMessage;
        gameOverContainer.style.display = 'flex';
        restartButton.style.display = 'flex';
    }
 
}

function restartGame() {
    attempts = 0;
    gameDisabled = false;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`New random number to guess: ${randomNumber}`);
    render(maxGuesses);

    document.getElementById('user-input').disabled = false;
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('feedback').innerText = '';

      const gameOverContainer = document.getElementById('game-over');
        const gameOverMessage = document.getElementById('game-over-message');
        const restartButton = document.getElementById('restart-btn');
      
        gameOverMessage.innerText = ''; 
        gameOverContainer.style.display = 'none';
        restartButton.style.display = 'none';
}
document.getElementById('restart-btn').addEventListener('click', restartGame);
document.getElementById('submit-btn').addEventListener('click', handleGuess);

render(maxGuesses);
