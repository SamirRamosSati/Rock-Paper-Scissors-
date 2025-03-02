const buttons = document.querySelectorAll(".choices button");
const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

function computerChoice() {
  const choices = ["👊 Rock", "✋ Paper", "✌️ Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

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

function playGame(event) {
  const playerChoice = event.target.textContent;
  const computer = computerChoice();
  const result = determineWinner(playerChoice, computer);

  resultText.textContent = `You chose ${playerChoice}. Computer chose ${computer}. ${result}`;

  scoreText.textContent = `Score: You ${playerScore} - ${computerScore} Computer`;
}

buttons.forEach((button) => button.addEventListener("click", playGame));
