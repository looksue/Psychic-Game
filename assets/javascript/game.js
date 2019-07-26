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
var intGuessesLeft = 9; 
var lettersPicked = "";
var winLetter = "";
var alphArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// pick a letter
winLetter = alphArray[Math.floor(Math.random() * 26)];

console.log (winLetter);