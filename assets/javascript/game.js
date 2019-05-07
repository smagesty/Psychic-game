// all variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessed = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;
//make the value null so it can be assigned later
var toGuess = null;

// update how many guesses left for user, letter to guess *a-z*, guesses already made
var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

//assign the random letter to be guessed
var updatetoGuess = function () {
    toGuess = letters[Math.floor(Math.random() * letters.length)];
};
//the letters guessed by users
var updateGuessesSoFar = function () {
    document.querySelector("#guesses-so-far").innerHTML = guessed.join(", ");

// if/else statements to determine if user has guessed right answer 
    //resets guesses and guessed leters, computer guesses reset and game starts again
    // if (guessed === toGuess) {

    //     wins++;
    //     guessesLeft = 9;
    //     document.getElementById("win").innerHTML = wins;

    //     guessed = [];

    //     toGuess = computer[Math.floor(Math.random() * computer.length)];
    //     console.log(toGuess);
    // }


};
// resets and calls function to run code again using variables we create above to update guesses
var reset = function () {
    guessesLeft = 9;
    guessed = [];
    updatetoGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

// for(i=0; i<10; i++){
//     if(toGuess === guessed) {
//         alert("You guessed correctly");
//         //inserting break to stop for loop if guessed correctly
//         break;
//     } else{
//         guessed = prompt("Please try again");
//     }
//     };




// letters clicked are received, makes them all lower case *not case sensitive*
document.onkeydown = function (event) {
    // ++ adds one -- erases one
    guessesLeft--;

    var letter = event.key.toLowerCase();     
    guessed.push(letter);
    updateGuessesLeft();
    updateGuessesSoFar();


// if win, records it and documents it
    if (letter === toGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        //alert them they have won and the correct letter
        alert("You guessed Correctly!" + " The correct answer was: " + toGuess);
        reset();
    }
// if its not the correct letter... records loSS and documents it
if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
}
