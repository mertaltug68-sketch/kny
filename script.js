const cells = document.querySelectorAll(".cell");
const status = document.querySelector(".status");
const restart = document.querySelector(".restart");

var player = "Human";
var gameOver = false;

var board = ["", "", "",
            "", "", "",
            "", "", ""];

const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],            
    [6,4,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

for (let i = 0; i < 9; i++) {
    cells[i].addEventListener("click", function () {
        if (gameOver || board[i] != "") {
            return;
        }

        if (player == "Human") {
            board[i] = "X";
            cells[i].textContent = "X";
        }
        else {
            board[i] = "O";
            cells[i].textContent = "O";   
        }

        checkWinner();

        if (!gameOver) {
            if (player=="Human") {
                player = "Demon";
            } else {
                player = "Human";
            }

            status.textContent = player + "'s Turn";
        }

    });
}

function checkWinner() {
    for (let i = 0; i<wins.length;i++) {
        let a = wins[i][0];
        let b = wins[i][1];
        let c = wins[i][2];

        if (
            board[a] != "" &&
            board[a] == board[b] &&
            board[b] == board[c]
        ) {
            if (player == "Human") {
                status.textContent = "Humans Win!";
                document.body.classList.remove("demons");
                document.body.classList.add("humans");

            } else {
                status.textContent = "Demons Win!";
                document.body.classList.remove("humans");
                document.body.classList.add("demons");  
            }
            gameOver = true;
            return;
        }
    }

    let full = true;

    for (let i = 0; i < board.length; i++) {
        if (board[i] == "") {
            full = false;
        }
    }

    if (full) {
        status.textContent = "It's a Draw!";
        gameOver = true;
    }
}

restart.addEventListener("click", function () {
    player = "Human";
    gameOver = false;

    status.textContent = "Human's Turn";

    for (let i = 0; i < board.length; i++) {
        board[i] = "";
        cells[i].textContent = "";
    }
});