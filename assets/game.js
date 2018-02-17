var guesses = 0;
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
var guessesLeft = document.querySelector("#numberGuessesLeft");
var guessSoFar = document.querySelector("#letterGuessSoFar");
var winsCount = document.querySelector("#wins");
var lossCount = document.querySelector("#losses");
var wins = 0;
var losses = 0;
var guessesCount = 9;
var lettersGuessed = " ";
var userGuess;


window.addEventListener("keyup", handleKeyUp);

function handleKeyUp() {
    var thisGuess = event.key.toLowerCase();
    
    if (guessesCount > 0) {
        checkGuess(thisGuess);
        guessesCount--;
        guessesLeft.textContent = guessesCount; 
        lettersGuessed = lettersGuessed.concat(thisGuess + " ");
        guessSoFar.textContent = lettersGuessed;
        
        } else {
            losses++;
            alert("Game over, man.");
            resetGame();
        } 

}


function checkGuess(userGuess) {

    if (userGuess === randomLetter) {
        wins++;
        winsCount.textContent = wins;
        alert("You've won!");
        resetGame();
    } else {
        lossCount.textContent = losses;
    }

}

function resetGame() {
    guesses = 0;
    randomLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
    guessesCount = 9;
    lettersGuessed = " ";
    guessesLeft.textContent = 9;
    guessSoFar.textContent = " ";
}