const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;
let gameLog = [];

const getPlayerChoice = () => {
    const selection = prompt(
        `${ROCK}, ${PAPER} or ${SCISSORS}?`,
        ""
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert("Invalid choice! We chose Rock for you!");
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (pChoice = DEFAULT_USER_CHOICE, cChoice) => {
    gameIsRunning = false;
    if (pChoice === cChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
};

const addEntryLog = (pChoice, cChoice, winner) => {
    gameLog.push({
        Player_Choice: pChoice,
        Computer_Choice: cChoice,
        Round_Winner: winner,
    });
    return gameLog;
};

startGameBtn.addEventListener("click", () => {
    if (gameIsRunning) return;
    gameIsRunning = true;
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    const gameLog = addEntryLog(playerSelection, computerSelection, winner);
    console.log(gameLog);
});
