// Initialize userScore and computerScore to 0
let userScore = 0;
let computerScore = 0;

// Get references to HTML elements that will be updated dynamically
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("score-board"); // Corrected a typo in the ID name
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Function to randomly select rock, paper or scissors for computer
function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// Function to convert the letter choices to full words for display
function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

// Function to execute when the user wins a round
function win(userChoice, computerChoice) {
	// Increment userScore and update the score in the HTML
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	// Format and display the result message in the HTML
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(
		userChoice
	)}${smallUserWord} beats ${convertToWord(
		computerChoice
	)}${smallCompWord}. Wohoo you win!`;
}

// Function to execute when the user loses a round
function lose(userChoice, computerChoice) {
	// Increment computerScore and update the score in the HTML
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	// Format and display the result message in the HTML
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(
		userChoice
	)}${smallUserWord} loses to ${convertToWord(
		computerChoice
	)}${smallCompWord}. Awww man you lost :(`;
}

// Function to execute when the round is a draw
function draw(userChoice, computerChoice) {
	// Format and display the result message in the HTML
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(
		userChoice
	)}${smallUserWord} equals ${convertToWord(
		computerChoice
	)}${smallCompWord}. It's a draw.`;
}

// This function represents a game of rock-paper-scissors. It takes in the user's choice as a parameter.
function game(userChoice) {
	// Generate a random computer choice using the getComputerChoice() function.
	const computerChoice = getComputerChoice();
	// Use a switch statement to determine the outcome of the game based on the user and computer choices.
	switch (userChoice + computerChoice) {
		// If the user wins, call the win() function.
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		// If the computer wins, call the lose() function.
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		// If it's a tie, call the draw() function.
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

// This function represents the main game logic. It adds event listeners to the HTML elements for the user's choice.
function main() {
	// Add an event listener to the rock button.
	rock_div.addEventListener("click", function () {
		game("r"); // Call the game() function with the user's choice of "r".
	});
	// Add an event listener to the paper button.
	paper_div.addEventListener("click", function () {
		game("s"); // Call the game() function with the user's choice of "s".
	});

	// Add an event listener to the scissors button.
	scissors_div.addEventListener("click", function () {
		game("p"); // Call the game() function with the user's choice of "p".
	});
}

// Call the main() function to start the game.
main();
