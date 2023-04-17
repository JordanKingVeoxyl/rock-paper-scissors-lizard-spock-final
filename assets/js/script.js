//Code from "What's dev" as specified in ReadMe
// Varibles for DOM elements
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

//GETS RANDOM COMPUTER CHOICE
function getComputerChoice() {
	const choices = ['r', 'p', 's', 'l', 'k'];
	const randomNumber = Math.floor(Math.random() * 5);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	if (letter === "s") return "Scissors";
	if (letter === "l") return "Lizard";
	return "Spock";
}

// FUNCTIONS FOR MESSAGE ON WIN, LOST OR DRAW, AND INCREMENT SCORE TO THE WINNER
function win(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
	userChoice_div.classList.add('result-winner');
	setTimeout(() => userChoice_div.classList.remove('result-winner'), 2000);
}

function lose(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!`;
	userChoice_div.classList.add('result-loser');
	setTimeout(() => userChoice_div.classList.remove('result-loser'), 2000);
}

function draw(userChoice, computerChoice) {
	result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`;
}