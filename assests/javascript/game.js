var guesspool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var chosenLetter = "";
var wrongGuess = [];
var letterGuessed = "";
var winCounter = 0;
var lossCouter = 0;
var numGuesses = 9;

function startgame () {

    numGuesses= 9;
    chosenLetter = guesspool[Math.floor(Math.random() * guesspool.length)];
    console.log(chosenLetter)







}