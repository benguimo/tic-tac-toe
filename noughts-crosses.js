const message = document.getElementById("players")
const board = document.getElementById("parent")

let boardState = [0, 0, 0,
                  0, 0, 0,
                  0, 0, 0];

let winStates = [];

winStates[0] = [1, 1, 1, 0, 0, 0, 0, 0, 0];
winStates[1] = [0, 0, 0, 1, 1, 1, 0, 0, 0];
winStates[2] = [0, 0, 0, 0, 0, 0, 1, 1, 1];

let player = 1;

const playerSymbols = {1: "X", 2: "O"};

function tickBox(i) {
    if (boardState[i] === 0) {
        boardState[i] = player;
        board.children[i].innerText = playerSymbols[player];

        if(player === 1) player++;
        else if(player === 2) player--;

        message.innerText = `Player ${player} turn`;
    }
}

