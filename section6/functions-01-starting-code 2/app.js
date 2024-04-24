const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`).toUpperCase();
  if (
    selection !== ROCK && 
    selection !== PAPER && 
    selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${ROCK} for you!`);
        return DEFAULT_USER_CHOICE;
  } else {
    return selection;
  }
};

startGameBtn.addEventListener("click", function() {
    if(gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...')
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});
