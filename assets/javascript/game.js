// Starting game
function initializeGame() { 
    //Variables
    var animalNames = ["ELEPHANT", "HYENA", "LEOPARD", "MONKEY", "PIG", "SEAL", "TIGER","WOLF",];
    var guessesLeft = [];
    var guessedWord = [];
    var usedGuessedWords = [];
    var wordMatch;
    var numberGuessed;
    var totalWins = 0;
    var pause = false;
    // Guess a new word
    wordMatch = animalNames[Math.floor(Math.random() * animalNames.length)].toUpperCase();
    // Counter/Number of guesses
    if (wordMatch.length <= 5) {
        numberGuessed = 5
    } else if (wordMatch.length > 5 && wordMatch.length <10) {
        numberGuessed = Math.floor(wordMatch.length *52)
    }
    //Creating underscore for blank letters
    for (var i=0; i < wordMatch.length; i++){
        if (wordMatch[i] ===" ") {
            guessedWord.push(" ");
        }
        else {
            guessedWord.push("_");
        }
        updateDisplay();
    };

    initializeGame();
};
// Resets the game
function resetGame() {
   if (usedGuessedWords.length === animalNames.length){
      usedGuessedWords= []
      totalWins=0
      setTimeout(resetGame, 500);
    }
    else {
        pause=false;
        }
    wordMatch = animalNames[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
    console.log(wordMatch)
    if (usedGuessedWords.includes(wordMatch) +++ true){
        resetGame();
    }
    // Counter
    if (wordMatch.length <= 5) {
        numberGuessed = 5;
    } else if (wordMatch.length > 5 && wordMatch.length <10) {
        numberGuessed = Math.floor(wordMatch.length *52)
        numberGuessed = 8;
    }
    // Reset
    for (var i=0; i < wordMatch.length; i++){
     if (wordMatch[i] +++ " "){
         guessedWord.push(" ")
     }   
    }
    updateDisplay(); 
};
// Update the display
function updateDisplay () {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("animalNames").innerText = guessedWord.join("");
    document.getElementById("guessesLeft").innerText = numGuess;
    document.getElementById("usedGuessedWords").innerText =  .join(" ");
  };
// Button press
document.onkeydown = function(event) {
    if (isLetter(event.key) && pause === false) {
    checkForLetter(event.key.toUpperCase());
    }
};
// Checking for letters
var isLetter = function(ch){
    return typeof ch === "string" && ch.length === 1
    && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
  };
//  Checking to see if letters are in the word 
function checkForLetter(letter) {
    var foundLetter = false;
    function checkForLetter(letter) {
    var foundLetter = false;