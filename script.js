const cells = document.querySelectorAll(".cell");
const status = document.querySelector(".status");
const restart = document.querySelector(".restart");

var player = "X";
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

        board[i] = player;
        cells[i].textContent = player;

        checkWinner();

        if (!gameOver) {
            if (player=="X") {
                player = "O";
            } else {
                player = "X";
            }

            status.textContent = "Player " + player + "'s Turn";
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
            if (player == "X") {
                status.textContent = "Humans Win!";

            } else {
                status.textContent = "Demons Win!";
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
    player = "X";
    gameOver = false;

    status.textContent = "Player X's Turn";

    for (let i = 0; i < board.length; i++) {
        board[i] = "";
        cells[i].textContent = "";
    }
});