// declare variables
var intWins = 0;
var intLosses = 0;
var intGuessesLeft = 0;
var lettersPicked = "";
var currentGuess = "";
var winLetter = "";
var alphArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// pick a letter and set guesses
winLetter = alphArray[Math.floor(Math.random() * 26)];
intGuessesLeft = 9;

console.log("Wins: " + intWins);
console.log("Losses: " + intLosses);
console.log("Guesses Left: " + intGuessesLeft);
console.log("Guesses so far: " + lettersPicked);

function updateScreen() {
    var divWins = document.getElementById("divWins");
    var divLosses = document.getElementById("divLosses");
    var divGuessesLeft = document.getElementById("divGuessesLeft");
    var divGuessesSoFar = document.getElementById("divGuessesSoFar");
    
    divWins.textContent = "Wins: " + intWins;
    divLosses.textContent = "Losses: " + intLosses;
    divGuessesLeft.textContent = "Guesses Left: " + intGuessesLeft;
    divGuessesSoFar.textContent = "Guesses so far: " + lettersPicked;
};

document.onkeyup = function(event) {
    
    var currentGuess=event.key;

    console.log (currentGuess);

    if (currentGuess == winLetter) {                                 // user guessed correctly
        intWins = intWins + 1;
        winLetter = alphArray[Math.floor(Math.random() * 26)];
        intGuessesLeft = 9;
        lettersPicked = "";
    } else if (currentGuess != winLetter && intGuessesLeft > 1) {    // user guessed incorrectly ...
        intGuessesLeft = intGuessesLeft - 1;
        lettersPicked = lettersPicked + currentGuess + ", ";
    } else if (currentGuess != winLetter && intGuessesLeft == 1) {   // ... and has no guesses left
        intLosses = intLosses + 1;
        winLetter = alphArray[Math.floor(Math.random() * 26)];
        intGuessesLeft = 9;
        lettersPicked = "";
    };

    updateScreen(); 

    console.log("Wins: " + intWins);
    console.log("Losses: " + intLosses);
    console.log("Guesses Left: " + intGuessesLeft);
    console.log("Guesses so far: " + lettersPicked);

};