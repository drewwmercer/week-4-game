// Variables
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
var crystalOneValue = Math.floor(Math.random() * (12 - 1) + 1);
var crystalTwoValue = Math.floor(Math.random() * (12 - 1) + 1);
var crystalThreeValue = Math.floor(Math.random() * (12 - 1) + 1);
var crystalFourValue = Math.floor(Math.random() * (12 - 1) + 1);
var winCounter = 0;
var lossCounter = 0;
var currentCount = 0;
var updateCurrentCount = function() {
  $("#current-count").empty();
  $("#current-count").append(currentCount);

  $("#win-count").empty();
  $("#win-count").append("Wins: " + winCounter);

  $("#loss-count").empty();
  $("#loss-count").append("Losses: " + lossCounter);
};
// Crystal Collector
var restartGame = function() {
  currentCount = 0;
  randomNumber = Math.floor(Math.random() * (120 - 19) + 19);

  $("#random-number").empty();
  $("#random-number").append(randomNumber);

  var crystalOneValue = Math.floor(Math.random() * (12 - 1) + 1);
  var crystalTwoValue = Math.floor(Math.random() * (12 - 1) + 1);
  var crystalThreeValue = Math.floor(Math.random() * (12 - 1) + 1);
  var crystalFourValue = Math.floor(Math.random() * (12 - 1) + 1);
  updateCurrentCount();
};

var gamePlay = function() {
  if (currentCount == randomNumber) {
    winCounter = winCounter + 1;
    alert("You win!");
    restartGame();
  } else if (currentCount > randomNumber) {
    lossCounter = lossCounter + 1;
    alert("You lost this time. Try again!");
    restartGame();
  } else {
    updateCurrentCount();
  }
};

$("#random-number").append(randomNumber);
$("#current-count").append(currentCount);

$(document).ready(function() {
  $("#blue-gem").on("click", function() {
    currentCount = currentCount + crystalOneValue;
    gamePlay();
  });

  $("#green-gem").on("click", function() {
    currentCount = currentCount + crystalTwoValue;
    gamePlay();
  });

  $("#orange-gem").on("click", function() {
    currentCount = currentCount + crystalThreeValue;
    gamePlay();
  });

  $("#purple-gem").on("click", function() {
    currentCount = currentCount + crystalFourValue;
    gamePlay();
  });
});

console.log("random: " + randomNumber);
console.log("one: " + crystalOneValue);
console.log("two: " + crystalTwoValue);
console.log("three: " + crystalThreeValue);
console.log("four: " + crystalFourValue);
