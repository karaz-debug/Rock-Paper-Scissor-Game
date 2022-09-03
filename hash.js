const choices = ["rock", "paper", "scissors"];

let winners = [];

// computer choices
const computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

console.log(computerPlay());

// user play function
function playerPlay() {
  let userSelection = prompt(
    "lets play the game , you can't stop until finishing 5 rounds"
  );

  // To remove spaces and convert everything in lowercase
  userSelection = userSelection.toLowerCase().trim();

  //   let verify if player Selection is included among the options allowed
  let checkInputValues = validateInput(userSelection);
  //   console.log(checkInputValues);

  while (checkInputValues == false) {
    userSelection = prompt(`Type Rock, Paper, or Scissors. Spelling Mistake`);
    // change to true if you enter correct again
    checkInputValues = true;
    while (userSelection == true) {
      userSelection = prompt(
        "lets play the game , you can't stop until finishing 5 rounds"
      );
    }
    userSelection = userSelection.toLowerCase().trim();
    checkInput = validateInput(userSelection);
  }
  return userSelection;
}

// validate input Functionallity
function validateInput(userSelection) {
  return choices.includes(userSelection);
}

// function for playing single round
const playerRound = (round) => {
  // user play 1st
  let playerChoice = playerPlay();

  // computer play 2nd
  let computerChoice = computerPlay();

  // show who exactly win the game
  const getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "Tie";
    } else if (
      (playerChoice === "rock" && computerChoice == "scissors") ||
      (playerChoice === "paper" && computerChoice == "rock") ||
      (playerChoice === "scissors" && computerChoice == "paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
  };

  //   call the winners function
  const winner = getWinner(playerChoice, computerChoice);

  // finally display the round result
  winners.push(winner); 

  //   display every round result
  eachRoundResults(playerChoice, computerChoice, winner, round);
};
console.log(winners);

// each round result functionality
function eachRoundResults(playerChoice, computerChoice, winner, round) {
  console.log(`This is Round: ${round}`);
  console.log(`Player Selected: ${playerChoice}`);
  console.log(`Computer Selected: ${computerChoice}`);

  if (winner === "Tie") {
    console.log("It's a tie!!!!");
  } else if (winner === "Player") {
    console.log(`${winner}: You won this round!!!`);
  } else {
    console.log(` You Loss!!!!!!`);
  }
  console.log("==============================");
}

// finall result functionallity
function finalResult() {
  // count player wins
  let playerWins = winners.filter((item) => item == "Player").length;

  //   count computer wins
  let computerWins = winners.filter((item) => item == "Computer").length;

  //   count the tie times
  let ties = winners.filter((item) => item == "Tie").length;

  console.log("Here Final Result:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);

  // Check results
  if (playerWins > computerWins) {
    console.log("Ohhh!!! Great YOU WIN!!!!");
  } else if (playerWins < computerWins) {
    console.log("GASH!!! Computer Wins.");
  } else {
    console.log("It's just a tie!!!");
  }
}

function game() {
  let round = 5;
  for (let i = 1; i <= round; i++) {
    playerRound(i);
  }
  finalResult();
}
game();
