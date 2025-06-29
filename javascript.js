var humanScore = 0;
var computerScore = 0;


    function getHumanChoice() {
    let answer;
    while (true) {
        answer = prompt("Enter your choice (Rock, Paper, Scissors)");
        if (answer === null) {
            continue; // If user cancels, ask again
        }
        answer = answer.trim().toLowerCase();

        if (answer === "rock" || answer === "paper" || answer === "scissors") {
            return answer.charAt(0).toUpperCase() + answer.slice(1);
        } else {
            alert("Invalid input! Please enter Rock, Paper, or Scissors.");
        }
    }


}
function getComputerChoice(){
    let a = Math.random();
    if(a<=0.33){
        return "Rock";
    }
    else if(a<=0.66){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice){
    console.log("You chose: " + humanChoice);

    console.log("Computer chose: " + computerChoice);

    if(humanChoice=="Rock" && computerChoice=="Paper"){
        console.log("Computer Wins!");
        computerScore++;
        console.log("Human Score: "+ humanScore)
        console.log("Computer Score: "+ computerScore);
    }
    else if(humanChoice=="Rock" && computerChoice=="Scissors"){
        console.log("Human Wins!");
        humanScore++;
        console.log("Human Score: "+ humanScore)
        console.log("Computer Score: "+ computerScore);
    }
    else if(humanChoice=="Paper" && computerChoice=="Rock"){
        console.log("Human Wins!");
        humanScore++;
        console.log("Human Score: "+ humanScore)
        console.log("Computer Score: "+ computerScore);
    }
    else if(humanChoice=="Paper" && computerChoice=="Scissors"){
        console.log("Computer Wins!");
        computerScore++;
        console.log("Human Score: "+ humanScore)
        console.log("Computer Score: "+ computerScore);
    }
    else if(humanChoice=="Scissors" && computerChoice=="Rock"){
        console.log("Computer Wins!");
        computerScore++;
        console.log("Human Score: "+ humanScore)
        console.log("Computer Score: "+ computerScore);
    }
    else if(humanChoice=="Scissors" && computerChoice=="Paper"){
        console.log("Human Wins!");
        humanScore++;
        console.log("Human Score: "+ humanScore++)
        console.log("Computer Score: "+ computerScore);
    }
    console.log(" ");
}
for(let i=0; i<5; i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
}