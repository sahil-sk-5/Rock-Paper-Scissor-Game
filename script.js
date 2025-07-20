let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userPoint = document.querySelector("#userScore");
let compPoint = document.querySelector("#computerScore");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = () =>{
    // console.log("Game is draw");
    msg.innerText = "Game is draw";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        // console.log("You win");
        msg.innerText = "You win!! Your " + userChoice + " beats Computer's " + compChoice;
        msg.style.backgroundColor = "green";
        // userScore++;
        userPoint.innerText++;
    }
    else{
        // console.log("Computer wins");
        msg.innerText = "Computer wins!! Computer's " + compChoice + " beats your " + userChoice;
        msg.style.backgroundColor = "red";
        // compScore++;
        compPoint.innerText++;
    }
}

const playGame = (userChoice) => {
    // console.log("user choice " + userChoice);
    const compChoice = genCompChoice();
    // console.log("comp user "+ compChoice);

    if(userChoice === compChoice){
        // Draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice clicked" + userChoice);
        playGame(userChoice);
    })
})


// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log(this.name);
//         console.log(this.email);
//     }
// }

// let firstUser = new User("Sahil","sahil@omk.com");
// let secondUser = new User("Amit","amit@ikr.com");
// firstUser.viewData();
// console.log(firstUser.email);
// console.log(secondUser.name+secondUser.email);
// secondUser.viewData();

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         // this.name=
//     }
// }

// let firstAdmin = new Admin("admin","okkk@okkk.com");
// console.log(firstAdmin.name + " " + firstAdmin.email);