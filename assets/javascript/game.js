// fill letters from a to z
var letters = [];
for (var unicodeValue = 97; unicodeValue <= 122; unicodeValue++) {
    letters.push( String.fromCharCode(unicodeValue) );
}

var guesses = [];
var computerChoice;
function resetGame() {
    guesses = [];
    computerChoice = letters[ Math.floor(Math.random() * letters.length) ];
    $("#guesses").text("");
    $("#guessesLeft").text(9);
}

$(function() {
    resetGame();

    $(document).on("keyup", function (event) {
        var userGuess = event.key.toLowerCase(); // in case they have caps lock
        if (
            (letters.indexOf(userGuess) === -1) || // guess must be a letter
            (guesses.indexOf(userGuess) !== -1)    // guess must be unique
        ) {
            return;
        }
        // decrement the guesses by one and log guesses so far
        var guessesLeft = $("#guessesLeft").text();
        $("#guessesLeft").text(--guessesLeft);
        guesses.push(userGuess);
        $("#guesses").text( guesses.join(", ") );

        if (computerChoice === userGuess) { // you win
            // add a win and reset the game
            var wins = $("#wins").text();
            $("#wins").text(++wins);
            resetGame();
        }
        else if ($("#guessesLeft").text() == 0) { // you lose
            // add a loss and reset the game
            var losses = $("#losses").text();
            $("#losses").text(++losses);
            resetGame();
        }
    });
});
