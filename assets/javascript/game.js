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
  $("#current-count").html(currentCount);
  
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
  
    $(".blue-gem").on("click", function() {
        $("#current-count").text(currentCount + crystalOneValue)
    });


  





var gamePlay = function (){
 		if (currentCount == randomNumber) {
 			winCounter = winCounter + 1;
 			alert("You win!");
 			restart();
 		} else if (currentCount > randomNumber) {
 			lossCounter = lossCounter + 1;
 			alert("You lost");
 			restart();
 		} else {
 			updateCurrentCount();
 		}
 	}

 	$("#random-number").append(randomNumber);
 	$("#current-count").append(currentCount);

   	$(document).ready(function() {
 		$(".blue-gem").click(function(){
 			currentCount = currentCount + crystalOneValue;
 			game();
 		})

 		$(".green-gem").click(function(){
 			currentCount = currentCount + crystalTwoValue;
 			game();
 		})

 		$(".orange-gem").click(function(){
 			currentCount = currentCount + crystalThreeValue;
 			game();
 		})

 		$(".purple-gem").click(function(){
 			currentCount = addition + crystalFourValue;
 			game();
         })
});
  });
});