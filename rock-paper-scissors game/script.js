function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  let outcome;
  
  if (playerChoice === computerChoice) {
    outcome = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    outcome = "You win!";
  } else {
    outcome = "You lose!";
  }
  
  document.getElementById("outcome").innerText = outcome;
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
  document.getElementById(playerChoice).classList.add("selected");
  document.getElementById(computerChoice).classList.add("selected");
  document.getElementById("play-again").style.display = "block";
}

function reset() {
  document.getElementById("outcome").innerText = "";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  document.getElementById("rock").classList.remove("selected");
  document.getElementById("paper").classList.remove("selected");
  document.getElementById("scissors").classList.remove("selected");
  document.getElementById("play-again").style.display = "none";
}