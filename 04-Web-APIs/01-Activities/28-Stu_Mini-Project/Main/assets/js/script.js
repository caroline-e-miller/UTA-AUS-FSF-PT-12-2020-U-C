// javascript code goes here

// initiate keyboard events

// button click for start

// timer

// var letters = wordsArray[0].split();

var banner = document.getElementById("alert");
var timer = document.getElementById("timer");

// this variable isn't functional yet
// var userGuess = document.getElementById("main");

var secondsLeft = 10;

function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    if (userGuess === displayWord) {
        banner.textContent = "You won!";
    } else {
        banner.textContent = "Game over!"
    }

}

setTime();

// wins and losses display

var wins = document.querySelector("win");
var losses = document.querySelector("lose");
