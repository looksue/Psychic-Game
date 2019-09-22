# Psychic-Game
This is a letter guessing game. The game runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. 
The player must pick the same letter as the secret random letter generated by the computer to win the game. 

**Motivation:** To employ JavaScript to dynamically update elements retrieved from the DOM by ID. 

**Code Style:** Tab

**Tech/Framework:** HTML5, CSS3, JavaScript, Arrays, Keypress Listeners

**Features:** Dynamically updated content, user input

**Code Example:**
```javascript
document.onkeyup = function(event) {
    
    // if the key pressed is not a letter, do nothing
    if (event.keyCode < 65 || event.keyCode > 90) {
        return;
    };
 
    // make the keypress lowercase
    var currentGuess = event.key.toLowerCase();

    if (currentGuess == winLetter) {                                 // user guessed correctly
        intWins = intWins + 1;
        winLetter = alphArray[Math.floor(Math.random() * 26)];
        intGuessesLeft = 9;
        lettersPicked = "";
        alert ("You won by pressing the mystery letter!")
    } else if (currentGuess != winLetter && intGuessesLeft > 1) {    // user guessed incorrectly ...
        intGuessesLeft = intGuessesLeft - 1;
        lettersPicked = lettersPicked + currentGuess + ", ";
    } else if (currentGuess != winLetter && intGuessesLeft == 1) {   // ... and has no guesses left
        intLosses = intLosses + 1;
        winLetter = alphArray[Math.floor(Math.random() * 26)];

        intGuessesLeft = 9;
        lettersPicked = "";
        alert ("You lost by pressing nine wrong letters! Try again!")
    };
```
**Screenshot:**

 ![Psychic Game](https://github.com/looksue/Psychic-Game/blob/master/assets/images/screenshot.png)

**Link to Project:** https://looksue.github.io/Psychic-Game/
