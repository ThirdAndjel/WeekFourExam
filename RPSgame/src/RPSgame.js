var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

var rock = "rock";
var paper = "paper";
var scissors = "scissors";

if (computerChoice === 0 <= 0.33) {
  computerChoice = "rock";
} else if (computerChoice >= 0.34 <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var compare = function (choice1, choice2){
    if (choice1 === choice2){
        return("The result is a tie!");
    }
    if (choice1 === rock){
        if (choice2 === scissors){
            return("rock wins");
        } else {
            return("paper wins");
        }
    }
    if (choice1 === paper){
        if (choice2 === rock){
            return("paper wins");
        } else {
            return("scissors wins");
        }
    }
    if (choice1 === scissors){
        if (choice2 === rock){
            return("rock wins");
        } else {
            return("scissors wins");
        }
    }
};

console.log("you chose " + userChoice);
console.log("the computer chose " + computerChoice);
console.log(compare(userChoice, computerChoice));
