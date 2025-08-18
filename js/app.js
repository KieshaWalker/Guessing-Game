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

