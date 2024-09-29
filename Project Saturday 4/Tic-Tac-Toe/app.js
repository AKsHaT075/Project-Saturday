let boxes = document.querySelectorAll(".box");
let reset = document.querySelector('#reset');
let newGameBtn = document.querySelector('#restart');
let winner = document.querySelector('.winner');
let msg = document.querySelector("#msg");
let x = 0;
let o = 0;

let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>  {
    box.addEventListener("click" , () => {

        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        }
        else {
            box.innerText = 'X';
            turnO = true;          
        }

        box.disabled = true;

        checkWinner();
        
    });

});

const resetGame = () => {
    turnO = true;
    enable();
    winner.classList.add("hide");

};

const disable = () => {
                   
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enable = () => {
                   
    for (let box of boxes) {
       
        box.innerText = "";
        box.disabled = false;
    }
    
};

const score = () => {

    document.querySelector("#xscore").innerText = `${x}`;
    document.querySelector("#oscore").innerText = `${o}`;


}

const ShowWinner = (name) => {
    msg.innerHTML = `Winner is ${name}`;
    winner.classList.remove("hide");
};



const checkWinner = () => {

        for (let pattern of winPattern) {

            let pos0 = boxes[pattern[0]].innerText;
            let pos1 = boxes[pattern[1]].innerText;
            let pos2 = boxes[pattern[2]].innerText;

            if (pos0 != "" && pos1 != "" && pos2 != "") {

                if (pos0 === pos1 && pos1 === pos2) {
                    disable();
                    ShowWinner (pos1);

                    if (pos1=='X') {
                        x++;
                    }
                    else {
                        o++;
                    }

                    score();
                    return;

                   
                }
            }
        }
};


newGameBtn.addEventListener("click" , resetGame);


reset.addEventListener("click" , resetGame);
