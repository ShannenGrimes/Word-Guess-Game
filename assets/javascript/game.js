var animalNames = [
    "ELEPHANT",
    "HYENA",
    "LEOPARD",
    "MONKEY",
    "PIG",
    "SEAL",
    "TIGER",
    "WOLF",
];

var guessesLeft = [];
var guessedWord = [];
var usedGuessedWords = [];
var wordMatch;
var numberGuessed;
var wins = 0;
var pause = false;
var hyenaLoseSound= new Audio("./assets/songs/hyena3.html")

function initializeGame()

// Guess a new word
wordMatch = animalNames[Math.floor(Math.random() * animalNames.length)].toUpperCase();
// Number of guesses

