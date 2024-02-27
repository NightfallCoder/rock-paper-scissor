//Rock paper scissor

let rock=document.querySelector(".icons");
let paper=document.querySelector(".icons1");
let scissor=document.querySelector(".icons2");
let userNewScore=document.querySelector("#number1");
let compNewScore=document.querySelector("#number2");
let button=document.querySelector("#play");
let userChoice;
let userScore=0;
let compScore=0;

//disabling rock-paper-scissor
rock.disabled = true;
paper.disabled = true;
scissor.disabled = true;

function enableButton(){
rock.disabled = false;
paper.disabled = false;
scissor.disabled = false;
}
rock.onclick=()=>{
    userChoice=0;
    console.log("rock");
    gameWinner();
};
paper.onclick=()=>{
    userChoice=1;
    console.log("paper");
    gameWinner();
};
scissor.onclick=()=>{
    userChoice=2;
    console.log("scissor");
    gameWinner();
};

gameWinner=()=>{
let compChoice=Math.floor(Math.random()*3);
if(userChoice===compChoice){
    userScore++;
    compScore++;
    
}
else if(
    (userChoice===0 && compChoice===2) || 
(userChoice===1 && compChoice===0) || 
(userChoice===2 && compChoice===1)
){
    userScore++;
   
}
else{
    compScore++;
    
}
userNewScore.innerText=userScore;
compNewScore.innerText=compScore;

if (userScore == compScore) {
    button.innerText = "Oops! It's a draw";
    button.style.backgroundColor="gray";
} else if (userScore > compScore) {
    button.innerText = "You win!";
    button.style.backgroundColor="green";
    
} else {
    button.innerText = "Computer wins!";
    button.style.backgroundColor="red";
}
};
