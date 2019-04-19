// all variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessed = [];
var toGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

// update how many guesses left for user, letter to guess *a-z*, guesses already made
var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};


var updateLetterToGuess = function () {
    toGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function () {
    document.querySelector("#guesses-so-far").innerHTML = guessed.join(", ");
};
// resets and calls function to run code again
var reset = function () {
    guessesLeft = 9;
    guessed = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};
// start the game off when refreshed
updateLetterToGuess();
updateGuessesLeft();
// letters clicked are received, makes them all lower case *not case sensitive*
document.onkeydown = function (event) {
    guessesLeft--;
    var letter = event.key.toLowerCase();     
    guessed.push(letter);
    updateGuessesLeft();
    updateGuessesSoFar();

// if win, records it and documents it
    if (letter === toGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }
// if loss, records it and documents it
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
};