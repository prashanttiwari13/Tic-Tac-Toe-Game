let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rstbtn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnB = true;//player A , player B

//2D Array
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnB = true;
    inableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnB) {
            box.innerText = "O";
            turnB = false;
        } else {
            box.innerText = "X";
            turnB = true;
        }
        box.ariaDisabled = true;

        checkWinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const inableboxes = () => {
    for (let box of boxes) {
        box.disabled  = false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        if (pos1Value != "" && pos2Value != "" && pos2Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                console.log("winner", pos1Value);
                showWinner(pos1Value);
            }
        }
    }

};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

