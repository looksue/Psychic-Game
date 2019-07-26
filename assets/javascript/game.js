// declare variables
var intWins = 0;
var intLosses = 0;
var intGuessesLeft = 0;
var lettersPicked = "";
var currentGuess = "";
var winLetter = "";
var alphArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// pick a letter and set guesses
winLetter = alphArray[Math.floor(Math.random() * 26)];
intGuessesLeft = 9;
lettersPicked = "";
currentGuess = "";

// begin looping
while (currentGuess != winLetter) {
    document.clear();
    document.write("Guess what letter I'm thinking of: _");
    document.write("<br/>");
    document.write("Wins: " + intWins);
    document.write("<br/>");
    document.write("Losses: " + intLosses);
    document.write("<br/>");
    document.write("Guesses Left: " + intGuessesLeft);
    document.write("<br/>");
    document.write("Guesses so far: " + lettersPicked);

    // find a way to accept a user's guess
    // event.key? prompt?
    
    if (currentGuess == winLetter) {  // user guessed correctly
        intWins = intWins + 1;
        winLetter = alphArray[Math.floor(Math.random() * 26)];
        intGuessesLeft = 9;
        lettersPicked = "";
        currentGuess = "";
        }
    if (currentGuess != winLetter) { // user guessed incorrectly ...
        if (intGuessesLeft > 1) {    // ... but has some guesses left
            intGuessesLeft = intGuessesLeft - 1;
            lettersPicked = lettersPicked + currentGuess + ", ";
        }
        if (intGuessesLeft = 1) {    // ... and has no guesses left
            intLosses = intLosses + 1;
            winLetter = alphArray[Math.floor(Math.random() * 26)];
            intGuessesLeft = 9;
            lettersPicked = "";
            currentGuess = "";
        }
    }
}