
let playerSelection = 'rock';
let computerSelection;
let compScore = 0;
let playerScore = 0;
let result;

const container = document.querySelector('#container');
const container2 = document.querySelector('#container2');
const indivresults = document.querySelector('#indivresults');
const results = document.querySelector('#results');

const rockbtn = document.createElement('button');
rockbtn.textContent = "Rock";
rockbtn.id = 'rock';

const paperbtn = document.createElement('button');
paperbtn.id = 'paper';
paperbtn.textContent = "Paper";

const scissorsbtn = document.createElement('button');
scissorsbtn.id = 'scissors';
scissorsbtn.textContent = "Scissors";

container.appendChild(rockbtn);
container.appendChild(paperbtn);
container.appendChild(scissorsbtn);
indivresults.textContent = `${playerScore} - ${compScore}`;

const buttons = container.querySelectorAll('button')

buttons.forEach((button) => {

  button.addEventListener('click', (i) => {
      playerSelection = button.id;
      console.log(playerSelection);
      results.textContent = playRound(playerSelection, getComputerChoice());
      indivresults.textContent = `${playerScore} - ${compScore}`;
      results.style.removeProperty('color');
      if((playerScore === 5)) {
        endGame(true);
        }
      else if(compScore === 5) {
          endGame(false);
        };
  
  });
  
});




function endGame(won) {
  if(won){
    results.textContent = "YOU WON THE WHOLE GAME";
    results.style.color = 'Green';
  }

  else {
    results.textContent = "YOU LOST THE WHOLE GAME";
    results.style.color = 'Red';
  }

  playerScore = 0;
  compScore = 0;
  return;
}


let addcompScore = () =>{
  compScore++;
  return compScore;
};
let addplayerScore = () =>{
  playerScore++;
  return playerScore;
};

let getComputerChoice = () =>  {
  const rand = Math.floor(Math.random() *3);
  switch(rand){
    case 0:
      return "paper";
    case 1:
      return "rock";
    case 2:
      return "scissors"
  }
  return "Error";
}


function playRound(playerSelection, getComputerChoice) {

  playerSelection = playerSelection.toLowerCase();
  container2.textContent = `Computer chose ${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}`;
  console.log("User: ", playerSelection , "\nComputer : ", getComputerChoice)

  if (
    (playerSelection === 'rock' && getComputerChoice === 'scissors') ||
    (playerSelection === 'paper' && getComputerChoice === 'rock') ||
    (playerSelection === 'scissors' && getComputerChoice === 'paper')
  ) {
    addplayerScore();
    return "You Win!";
  }
  if (
    (playerSelection === 'rock' && getComputerChoice === 'paper') ||
    (playerSelection === 'scissors' && getComputerChoice === 'rock') ||
    (playerSelection === 'paper' && getComputerChoice === 'scissors')
  ) {
    addcompScore();
    return "You Lose!";
  }
  if (playerSelection === getComputerChoice) {
    return "It's a Tie!";
  }

return "Seems like this wasnt accounted for!";
}

let game = () => {

  let userScore = 0;
  let compScore = 0;
  let Round = 1;

  for(let i = 0; i < 5;i++) {
    let result = playRound(playerSelection, getComputerChoice());
    switch(result) {
      case 'You Win!':
        userScore++;
        break;
      case "You Lose!":
        compScore++;
        break;
      case "It's a Tie!":
        i--;
        break;
      }

      console.log('Round:', Round, '\n' + result);
      console.log("Score:", userScore, "-" , compScore);



      Round++
  }

  if(userScore  > compScore) {
    return "YOU WON IT ALL";
  }
  else if(compScore > userScore) {
    return "YOU LOST IT ALL";
  }
  else{
    return "How'd we get here?";
  }

}
