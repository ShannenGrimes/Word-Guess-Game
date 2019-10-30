// Starting game
function start() {
    var x = document.getElementById("NEW WORD")

}
//Variables
var animalNames = ["ELEPHANT", "HYENA", "LEOPARD", "MONKEY", "PIG", "SEAL", "TIGER","WOLF",];
var guessesLeft = [];
var guessedWord = [];
var usedGuessedWords = [];
var wordMatch;
var numberGuessed;
var wins = 0;
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
        guessedWord.push("_");
    }
}
updateDisplay();

Document.write(wordMatch)
// Resets the game
function resetGame() {
    if (usedGuessedWords.length === animalNames.length)
        usedGuessedWords= []
        wins=0
        setTimeout(resetGame, 500)
}