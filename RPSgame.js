
let playerSelection = 'rock';
let computerSelection;
let compScore = 0;
let playerScore = 0;



const container = document.querySelector('#container');
const indivresults = document.querySelector('#indivresults');
const results = document.querySelector('#results');

const rockbtn = document.createElement('button');
rockbtn.textContent = "Rock";
rockbtn.id = 'rock';

const paperbtn = document.createElement('button');
paperbtn.textContent = "Paper";
paperbtn.id = 'paper';
const scissorsbtn = document.createElement('button');
scissorsbtn.textContent = "Scissors";
scissorsbtn.id = 'scissors';
container.appendChild(rockbtn);
container.appendChild(paperbtn);
container.appendChild(scissorsbtn);
indivresults.textContent = `${playerScore} - ${compScore}`;

const buttons = container.querySelectorAll('button')

buttons.forEach((button) => {

  button.addEventListener('click', (i) => {
      playerSelection = button.id;
      //console.log(playRound(playerSelection, getComputerChoice()))
      results.textContent = playRound(playerSelection, getComputerChoice());
      indivresults.textContent = `${playerScore} - ${compScore}`;
      
  });
  
});


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

/*let playerChoice = (choice) => {
  console.log(choice);
  return choice;
}
*/
function playRound(playerSelection, getComputerChoice) {

  playerSelection = playerSelection.toLowerCase();
  
  console.log("User: ", playerSelection , "\nComputer : ", getComputerChoice)

  if(playerSelection == 'rock' && getComputerChoice == 'paper') {
    addcompScore();
    return "You Lose!";
  }
  if(playerSelection == 'rock' && getComputerChoice == 'scissors') {
    addplayerScore();
    return "You Win!";
  }
  if(playerSelection == 'rock' && getComputerChoice == 'rock') {
    return "It's a Tie!";
  }
  if(playerSelection == 'paper' && getComputerChoice == 'rock') {
    addplayerScore();
    return "You Win!";
  }
  if(playerSelection == 'paper' && getComputerChoice == 'scissors') {
    addcompScore();
    return "You Lose!";
  }
  if(playerSelection == 'paper' && getComputerChoice == 'paper') {
    return "It's a Tie!";
  }
  if(playerSelection == 'scissors' && getComputerChoice == 'paper') {
    addplayerScore();
    return "You Win!";
  }
  if(playerSelection == 'scissors' && getComputerChoice == 'rock') {
    addcompScore();
    return "You Lose!";
  }
  if(playerSelection == 'scissors' && getComputerChoice == 'scissors') {
    return "It's a Tie!";
  }

return "Seems like this wasnt accounted for!";
}

let game = () => {

  let userScore = 0;
  let compScore = 0;
  let Round = 1;

  //console.log("computerSelection: ", computerSelection);
 // console.log("playerSelection: ", computerSelection);

  for(let i = 0; i < 5;i++) {
    let result = playRound(playerSelection, getComputerChoice());
    //console.log("RESULT: ", result);
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
    return "How's we get here?";
  }

}
/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
//const playerSelection = playerChoice();
//const computerSelection = getComputerChoice();



//console.log(game()); 