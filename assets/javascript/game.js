  // Variables
    var randomNumber;
    var crystalOneValue;
    var crystalTwoValue;
    var crystalThreeValue;
    var crystalFourValue;
    var winCounter;
    var lossCounter;
    var currentTally;

  $(document).ready(function () {

$("#random-button").on("click", function () {
        var randomNumber = (Math.floor(Math.random() * (120 - 19) +
            19));
        $("#random-number").html(randomNumber);
    });


});