var guesspool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var wrongGuesses = [];
var letterGuessed = "";
var winCounter = 0;
var lossCouter = 0;
var numGuesses = 9;
// var userChoiceLower = userChoice.toLowerCase()
function startgame () {

    numGuesses === 9;
    chosenLetter = guesspool[Math.floor(Math.random() * guesspool.length)];
    console.log(chosenLetter)
    wrongGuesses = []
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}
function checkletter(userChoice){
    if (userChoice){

    } else {
        wrongGuesses.push(userChoice);
        numGuesses--;
    }

}
function round(){
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCouter + " | WrongGuesses " + numGuesses)
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
    if (userChoice === chosenLetter){
        winCounter++;
        alert("YOU WIN!!!")
        document.getElementById("win-counter").innerHTML = winCounter;
        startgame();
    } else (numGuesses === 0)
        lossCouter++;
        alert("Maybe Next Time?")
        document.getElementById("loss-counter").innnerHTML= lossCouter
        startgame();;
    }





startgame();
document.onkeyup = function(event){
    userChoice= String.fromCharCode(event.which).toLowerCase();
    checkletter(letterGuessed);
    round();
};