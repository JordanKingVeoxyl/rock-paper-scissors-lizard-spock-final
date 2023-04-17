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