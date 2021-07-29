// // Rock Paper Scissor 
// // 1.Picker :A function for the computeMachiner to pick rock, paper or scissors
// // 2.Winner :A function to return the winner.
// // 3.RunGame :A function to play until someone wins 5 times and log the results.
// // 4.EndGame :Stop the game.


function picker() {
    const choice = ['rock', 'paper', 'scissor'];
    return choice[Math.floor((Math.random() * 3))]
};


function winner(userInput, machineInput) {
    console.log(`${userInput}(User) VS ${machineInput}(Machine)`);

    if (userInput === machineInput) {
        return "Draw";
    }

    else {
        if (userInput === 'rock') {
            return machineInput === 'paper' ? 'Machine Wins' : 'You Win';
        }
        else if (userInput === 'paper') {
            return machineInput === 'scissor' ? 'Machine Wins' : 'You Win';
        }
        else {  //Has to be scissors if not rock or paper
            return machineInput === 'rock' ? 'Machine Wins' : 'You Win';
        }
    }

};

// Basic Logic 
// function game(userChoice, compChoice) {
//     let userScore = compScore = 0;
//     while (true){
//         theWinner = winner(userChoice, compChoice);
//         theWinner != 'Draw' ? theWinner == 'You Win' ? userScore++ : compScore++ : 0;
//         console.log(theWinner);
//         console.log(userScore, compScore);
//         if(userScore>=5){break};
//         if(compScore>=5){break};
//     } 
// }
// game()


// DOM

function endGame(){
    document.getElementById('end').style.display="none";
    document.getElementById('again').style.display="block";
    document.getElementById('winner').style.display="block";
}

function runGame(){

    let userChoice = this.alt;
    let compChoice = picker();
    let theWinner = (winner(userChoice, compChoice));
    theWinner != 'Draw' ? theWinner == 'You Win' ? userScore++ : compScore++ : 0;

    document.getElementById('man-score').innerHTML = userScore;       //Updates User Score on Screen
    document.getElementById('machine-score').innerHTML = compScore;   //Updates Machine Score on Screen
    document.getElementById('winner').innerHTML = theWinner;          //Updates Winner on Screen  

    let bgMan =document.getElementById('man');
    let bgMachine =document.getElementById('machine');
    if (theWinner=='Draw'){
       bgMan.style.backgroundColor="orange"; 
       bgMachine.style.backgroundColor="orange"; 
    }
    else if (theWinner == 'You Win') {
        bgMan.style.backgroundColor="limegreen";
        bgMachine.style.backgroundColor="rgb(206, 57, 57)";
    }
    else {
        bgMachine.style.backgroundColor="limegreen";
        bgMan.style.backgroundColor="rgb(206, 57, 57)";}

    if(userScore>=5){endGame(), 5000};
    if(compScore>=5){endGame(), 5000};
}


var userScore = compScore = 0;
let detected = document.querySelectorAll('.trigger');               // console.log(detected); ->gives rock paper or scissor
detected.forEach(item => item.addEventListener('click', runGame));  //run game





