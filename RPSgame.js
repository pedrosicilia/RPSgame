


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

let playerChoice = () => {
  return "rock"
}

function playRound(playerSelection, getComputerChoice) {

  playerSelection = playerSelection.toLowerCase();
  
  console.log("User: ", playerSelection , "\nComputer : ", getComputerChoice)

  if(playerSelection == 'rock' && getComputerChoice == 'paper') {
    return "You Lose!";
  }
  if(playerSelection == 'rock' && getComputerChoice == 'scissors') {
    return "You Win!";
  }
  if(playerSelection == 'rock' && getComputerChoice == 'rock') {
    return "It's a Tie!";
  }
  if(playerSelection == 'paper' && getComputerChoice == 'rock') {
    return "You Win!";
  }
  if(playerSelection == 'paper' && getComputerChoice == 'scissors') {
    return "You Lose!";
  }
  if(playerSelection == 'paper' && getComputerChoice == 'paper') {
    return "It's a Tie!";
  }
  if(playerSelection == 'scissors' && getComputerChoice == 'paper') {
    return "You Win!";
  }
  if(playerSelection == 'scissors' && getComputerChoice == 'rock') {
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
    let result = playRound(playerChoice(), getComputerChoice());
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
const playerSelection = playerChoice();
const computerSelection = getComputerChoice();



console.log(game()); 