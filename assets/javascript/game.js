// Variables
var randomNumber;
var crystalOneValue;
var crystalTwoValue;
var crystalThreeValue;
var crystalFourValue;
var winCounter = 0;
var lossCounter = 0;
var currentCount = 0;

$(document).ready(function() {
  $("#win-count").html("Wins: " + winCounter)
  $("#loss-count").html("Losses: " + lossCounter)
  $
  
  $("#random-button").on("click", function() {
    var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#random-number").html(randomNumber);
    var crystalOneValue = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalTwoValue = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalThreeValue = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalFourValue = Math.floor(Math.random() * (12 - 1) + 1);

    console.log("random: " + randomNumber);
    console.log("one: " + crystalOneValue);
    console.log("two: " + crystalTwoValue);
    console.log("three: " + crystalThreeValue);
    console.log("four: " + crystalFourValue);
  });

  $(".blue-gem").on("click", function() {
    $("#current-count").html(currentCount + crystalOneValue)
  });
});
