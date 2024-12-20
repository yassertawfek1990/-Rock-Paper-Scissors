console.log("Hello World")
let humanScore = 0
let computerScore = 0
function getComputerChoice(){
    let choices = ['rock', 'paper',  'scissors']
    return choices[Math.floor(Math.random()*3)]
}

// console.log(getComputerChoice())

// function getHumanChoice(){
//     return(prompt("choose rock , paper or scissors").toLowerCase())
// }
// console.log(getHumanChoice())

function playRound(humanChoice , computerChoice){
    if (humanChoice == computerChoice){console.log('it is a draw')}
    else if (humanChoice == "rock" && computerChoice == 'scissors'){
        humanScore++
        console.log('You Win! Rock beats Scissors')
    }
    else if (humanChoice == "paper" && computerChoice == 'rock'){
        humanScore++
        console.log('You Win! Paper beats Rock')
    }
    else if (humanChoice == "scissors" && computerChoice == 'paper'){
        humanScore++
        console.log('You Win! Scissors beats Paper')
    }
    else if (humanChoice == "scissors" && computerChoice == 'rock'){
        computerScore++
        console.log('You Loose! Rock beats Scissors')
    }
    else if (humanChoice == "rock" && computerChoice == 'paper'){
        computerScore++
        console.log('You Loose! Paper beats Rock')
    }
    else if (humanChoice == "paper" && computerChoice == 'scissors'){
        computerScore++
        console.log('You Loose! Scissors beats Paper')
    }

}



// function playGame(){
//     for (let i = 0; i<5;i++){
//         const humanChoice = getHumanChoice()
//         const computerChoice = getComputerChoice()
//         playRound(humanChoice , computerChoice)
//     }

//     humanScore > computerScore? console.log(`You win, your score is: ${humanScore} and computer score is: ${computerScore}`): humanScore < computerScore? console.log(`You loose, your score is: ${humanScore} and computer score is: ${computerScore}`): console.log(`It is a Draw, your score is: ${humanScore} and computer score is: ${computerScore}`)
// }
// playGame()
function playGame(humanChoice){
    
    const computerChoice = getComputerChoice()
    playRound(humanChoice , computerChoice)
    

    humanScore > computerScore? console.log(`You win, your score is: ${humanScore} and computer score is: ${computerScore}`): humanScore < computerScore? console.log(`You loose, your score is: ${humanScore} and computer score is: ${computerScore}`): console.log(`It is a Draw, your score is: ${humanScore} and computer score is: ${computerScore}`)
}

let buts = document.querySelectorAll("button")

Array.from(buts).forEach(b => {
    b.onclick = ()=>{
        playGame(b.textContent)
        document.querySelector("div").textContent = humanScore == 5?`You win, your score is: ${humanScore} and computer score is: ${computerScore}`:computerScore == 5? `Computer wins, your score is: ${humanScore} and computer score is: ${computerScore}`: `your score is: ${humanScore} and computer score is: ${computerScore}`

    }
});