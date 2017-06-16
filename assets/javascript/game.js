
// DEFINING GLOBAL VARIABLES

var wins = 0;
var losses = 0;
var guessesLeft = 13;
var guessedLetters = [];

// COMP RANDOM OPTS
var computerOpts = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// GLOBAL FUNCTION
function gameReset () {
	guessesLeft = 13;
	guessedLetters = [];

}

// COMPTER RANDOM LETTER SELECTION
	var computerChoice = computerOpts[Math.floor(Math.random() * computerOpts.length)];
		console.log("computerChoice: ", computerChoice);


// CAPTURE USER GUESS FUNCT

	document.onkeyup = function(event) {

		// DETERMIN KEY PRESSED
			var userGuess = event.key;
				console.log("userGuess: ", userGuess);
				alert("You guessed: " + userGuess);

		// GAME WIN/GUESS COUNT FUNCTION
			if(guessesLeft === 0) {
				losses++;
				gameReset();
				console.log("GAME LOST");
				alert("You lost..maybe work on your spiritial ki");
				

				}

			else {
				if(userGuess === computerChoice) {
					gameReset();
					console.log ("GAME WON");
					alert("You're psychic alright...YOU WIN!");
					wins++;
				}

				else {
					console.log("WRONG LETTER");
					alert("Nope that's not it, guess again");
					guessesLeft--;
					guessedLetters.push(userGuess);
				}

			} // END OF IF FUNCTS

	 


		// SCORE BOARD
			console.log("-----")
			console.log("Wins: " + wins);
			console.log("Losses: " + losses);
			console.log("Guesses Left: " + guessesLeft)



		// DISPLAY SCORE BOARD HTML
			var scoreboard = "<p> LETTERS ALREADY GUESSED: " + guessedLetters.join(', ') + "<p> # OF GUESSES LEFT: " + guessesLeft + "</p>" + "</p>" + "<p> WINS: " + wins + "</p>" + "<p> LOSSES: " + losses + "</p>";

			document.querySelector("#psychic_game").innerHTML = scoreboard


	} // END OF EVENT FUNCT




