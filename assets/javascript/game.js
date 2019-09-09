// array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// quick reference to html

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var guessedText = document.getElementById("guessed");

//variable declarations

var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guessesSoFar = [];
var isPsychic = false;
var gameChoice = letters[Math.floor(Math.random() * letters.length)];
var guess = document.onkeyup;

document.onkeyup = function(event) {
    var guess = event.key; 
    var gameChoice = letters[Math.floor(Math.random() * letters.length)];
    guessesSoFar.push(guess);

    if (gameChoice == guess) {
        wins ++;
        guessesLeft = 7;
        guessesSoFar = [];
    }

    if (gameChoice != guess) {
        guessesLeft --;

    }

    if (guessesLeft == 0) {
        losses ++;
        guessesLeft = 7;
        guessesSoFar = [];   
        
    }
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses-left: " + guessesLeft;
    guessedText.textContent = "Guessed: " + guessesSoFar;
}

