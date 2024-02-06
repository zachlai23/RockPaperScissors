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

console.log(getComputerChoice());