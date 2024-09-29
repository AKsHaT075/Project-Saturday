let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choices");
const msg = document.querySelector('#msg');
const comp = document.querySelector('#comp-score');
const user = document.querySelector('#user-score');

const drawGame = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "grey";

};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        msg.innerText = "You Win";
        user.innerText = `${userScore}`;
        msg.style.backgroundColor = "green";
    }

    else {
        compScore++;
        msg.innerText = "You Loose";
        comp.innerText = `${compScore}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    const CompChoice = genCompChoice();

    if (userChoice === CompChoice) {
        drawGame();
    }

    else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = CompChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper") {
            userWin = CompChoice === "scissors" ? false : true;
        }

        else {
            userWin = CompChoice === "rock" ? false : true;
        }

        showWinner(userWin);

    }



};

choices.forEach((choice) => {


    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});