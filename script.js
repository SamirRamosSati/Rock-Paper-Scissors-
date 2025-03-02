// DOM Elements
const buttons = document.querySelectorAll(".choices button");
const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score");

// Score Variables
let playerScore = 0;
let computerScore = 0;

// Function for Computer's Choice
function computerChoice() {
  const choices = ["👊 Rock", "✋ Paper", "✌️ Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to Determine the Winner
function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }
  if (
    (player === "👊 Rock" && computer === "✌️ Scissors") ||
    (player === "✋ Paper" && computer === "👊 Rock") ||
    (player === "✌️ Scissors" && computer === "✋ Paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

// Main Game Function
function playGame(event) {
  const playerChoice = event.target.textContent;
  const computer = computerChoice();
  const result = determineWinner(playerChoice, computer);

  // Update Result Text
  resultText.textContent = `You chose ${playerChoice}. Computer chose ${computer}. ${result}`;

  // Update Score
  scoreText.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;
}

// Add Event Listeners to Buttons
buttons.forEach((button) => button.addEventListener("click", playGame));
