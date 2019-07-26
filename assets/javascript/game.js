/*
start program
declare variables
pick a letter
while false
write the screen
accept guesses/updates
loop
end 
*/

// declare variables
var intWins = 0;
var intLosses = 0;
var intGuessesLeft = 0; 
var lettersPicked = "";
var currentGuess = "";
var winLetter = "";
var alphArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

beginGame:
// pick a letter and set guesses
winLetter = alphArray[Math.floor(Math.random() * 26)];
intGuessesLeft = 9;

// begin looping
while (currentGuess != winLetter) {
    document.clear();
    document.write("Guess what letter I'm thinking of: _");
    document.write("");
    document.write("Wins: " + intWins);
    document.write("");
    document.write("Losses: " + intLosses);
    document.write("");
    document.write("Guesses Left: " + intGuessesLeft);
    document.write("");
    document.write("Guesses so far: " + lettersPicked);
}