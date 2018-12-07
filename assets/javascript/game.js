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
    document.getElementById("guesses").textContent = "";
    document.getElementById("guessesLeft").textContent = 9;
}

window.onload = function() {
    resetGame();

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase(); // in case they have caps lock
        if (
            (letters.indexOf(userGuess) === -1) || // guess must be a letter
            (guesses.indexOf(userGuess) !== -1)    // guess must be unique
        ) {
            return;
        }
        // decrement the guesses by one and log guesses so far
        document.getElementById("guessesLeft").textContent--;
        guesses.push(userGuess);
        document.getElementById("guesses").textContent = guesses.join(", ");

        if (computerChoice === userGuess) { // you win
            // add a win and reset the game
            document.getElementById("wins").textContent++;
            resetGame();
        }
        else if (document.getElementById("guessesLeft").textContent == 0) { // you lose
            // add a loss and reset the game
            document.getElementById("losses").textContent++;
            resetGame();
        }
    };
};
