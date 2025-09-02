const result = document.getElementById("result");
const yourScore = document.getElementById("yourScore")
const machineScore = document.getElementById("machineScore")
const tieScore = document.getElementById("tie")
 
let scoreTie = 0
let scoreHuman = 0
let scoreMachine = 0

function playHuman(humanChoices) {
  playTheGame(humanChoices, playMachine());
}

function playMachine() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = Math.floor(Math.random() * 3);
  return choices[randomChoices];
}

function playTheGame(human, machine) {
  if (human === machine) {
    result.textContent = "Empatou!!"
    tieScore.textContent =  `Empates: ${++ scoreTie}`
  } else if (
    (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock") ||
    (human === "scissors" && machine === "paper")
  ) {
    result.textContent = "Parabéns, você ganhou!"
    yourScore.textContent = `Sua pontuação: ${++ scoreHuman}`
  } else {
    result.textContent = "Você perdeu!"
    machineScore.textContent = `Pontuação da Máquina: ${++scoreMachine}`
  }
}
function resetGame(){
    result.textContent = ""
    tieScore.textContent =  `Empates: 0`
    yourScore.textContent = `Sua pontuação: 0`
    machineScore.textContent = `Pontuação da Máquina: 0`
}