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

                        var randomNumber = "";

                        $("#random-button").on("click", function () {
                            var newNum = (Math.floor(Math.random() * (999999999 - 100000000) +
                                100000000));
                            $("#random-number").prepend(newNum, "<br>", numbers)
                        });







                        // Check if any button is clicked...
                        $(document).on("click", "button", function () {

                            // Checks if it's a number and that its not the end of the calculation ("!lockButtons")
                            if ($(this).hasClass("number") && !lockButtons) {

                                // We'll then set our "hasNumber" variable to true to indicate that we can proceed in selecting an operator.
                                hasNumber = true;

                                // If we haven't received an operator yet...
                                if (firstNumberComplete === false) {

                                    // Then grab the number of the value clicked and build a string with it
                                    firstNumber += $(this).attr("value");

                                    // Print the number to the firstPage
                                    console.log(firstNumber);

                                    // Print it to the div
                                    $("#first-number").html(firstNumber);
                                }

                                // If we have received an operator already...
                                else {

                                    // Grab the number of the value clicked and build a string with it
                                    secondNumber += $(this).attr("value");

                                    // Print the number to the firstPage
                                    console.log(secondNumber);

                                    // Print it to the div
                                    $("#second-number").html(secondNumber);
                                }
                            }

                            // Checks if its an operator (but not "=")
                            if ($(this).hasClass("operator") && hasNumber && !lockButtons) {
                                firstNumberComplete = true;

                                // Set the visual to show the operator's symbol
                                $("#operator").html("<h1>" + $(this).text() + "</h1>");
                                operator = $(this).attr("value");
                            }

                            // Checks if the equal button has been pressed. If so...
                            if ($(this).hasClass("equal")) {

                                // Lock the keyboard from being clicked
                                lockButtons = true;

                                // Convert the numbers into integers
                                firstNumber = parseInt(firstNumber);
                                secondNumber = parseInt(secondNumber);

                                // Then figure out which operator was clicked and perform the necessary functions.
                                // Then show the result in the HTML
                                if (operator === "plus") {
                                    result = firstNumber + secondNumber;
                                }

                                if (operator === "minus") {
                                    result = firstNumber - secondNumber;
                                }

                                if (operator === "times") {
                                    result = firstNumber * secondNumber;
                                }

                                if (operator === "divide") {
                                    result = firstNumber / secondNumber;
                                }

                                if (operator === "power") {
                                    result = Math.pow(firstNumber, secondNumber);
                                }

                                $("#result").html(result);
                            }

                            // If clear is selected then wipe away all of the content from the screen and unlock the buttons.
                            if ($(this).hasClass("clear")) {

                                firstNumber = "";
                                secondNumber = "";
                                operator = "";
                                result = 0;
                                hasNumber = false;
                                firstNumberComplete = false;
                                lockButtons = false;

                                $("#first-number, #second-number, #operator, #result").empty();
                            }
                        });
                    });