function getComputerChoice() {
    /*let rock = 1;
    let paper = 2;
    let scissors = 3;*/
    let rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if( rand == 1 ) {
        return "rock";
    }
    else if( rand == 2){
        return "paper";
    }
    return "scissors";
}

function playRound( playerSelection, computerSelection, w, l ) {
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()
    s = ""
    result = 0
    if(  player == 'rock' )   {
        if( computer == 'rock' ) {
            console.log("Tie! Rock ties Rock.");
        }
        else if( computer == 'paper' )  {
            console.log("You lose! Paper beats rock.");
        }
        else if( computer == 'scissors' )   {
            console.log("You win! Rock beats scissors.");
            result = 1;
        }
    }
    else if( player == 'paper' )    {
        if( computer == 'rock' ) {
            console.log("You win! Rock beats scissors.").
            result = 1;
        }
        else if( computer == 'paper' )  {
            console.log("Tie! Paper ties paper.");
        }
        else if( computer == 'scissors' )   {
            console.log("You lose! Scissors beats paper.");
        }
    }
    if( computer == 'rock' ) {
        console.log("You lose! Rock beats scissors.");
    }
    else if( computer == 'paper' )  {
        console.log("You win! Scissors beats paper.");
        result = 1;
    }
    else{
        console.log("Tie! Scissors ties scissors.");
    }
    return result;
}

function playGame()  {
    let win = 0;
    let lose = 0
    for( let i = 0; i < 5; i++ )    {
        let playerSelection = prompt("Enter 'r'(rock), 'p'(paper), or 's'(scissors):");
        const computerSelection = getComputerChoice();
        res = playRound( playerSelection, computerSelection, win, lose );
    }
    if( res > 3 )   {
        console.log("You won!");
    }
    else{
        console.log("You lost!  Hahahahahahahaha")
    }
}

let count = 0;
console.log(playGame());
