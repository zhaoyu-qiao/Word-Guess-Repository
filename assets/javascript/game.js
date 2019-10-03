//Reminder - add sound

//Define an array of flowers
let flowerNameArray = ["tulip", "lily", "lavender", "daisy", "violet", "rose", "aster", "jasmine", "aubrieta", "marigold", "poppy", "acacia", "begonia", "zinnia", "camellia", "azalea", "petunia", "irises", "anemone", "aubrieta"];

// Creating variables to hold the number of user guesses, remaining guesses, 

let wins = 0; // how many time the word guess is correct
let loses = 0; //how many time the word guess is wrong
let userGuessTimes = 0;
let ramainingGuessTimes = 17;

//Link the js input to the html file
let userGuessWordText = document.getElementById("user-guess-word-text");
let userGuessLetterText = document.getElementById("letter-guessed-text");

//Function starts when user presses a key:
document.onkeyup = function (event) {

    var userGuessLetter = event.key;
    //Pick a radom folower from the flowerarray when user hit a key to start the game
    let flowerName = flowerNameArray[Math.floor(Math.random()) * flowerNameArray.length];

    //The initial answerArray is blank, need to fill in how many letters should be there with "_". Needs to put space in between.
    let answerArray = [];
    for (let i = 0; i < flowerName.length; i++) {
        answerArray[i] = "_";
    }
    //Hold the remaining letters in the word that's chosen by user.
    let remainingLetters = flowerName.length;


    //while the user is still guessing, show what they've guessed, needs to write to the html using document.getElement
    while (remainingLetters > 0) {
        console.log(answerArray.join(" "));
    }

    //var userChoiceText = document.getElementById("current-word-text");

    //get a guess from the user
    for (let j = 0; i < flowerName.length; j++) {}


    userGuessLetterText.textContent = "You chose: " + userGuessLetter;

} //closing function