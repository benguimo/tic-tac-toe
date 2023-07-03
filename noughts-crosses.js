const message = document.getElementById("players")
const board = document.getElementById("parent")

let boardState = [0, 0, 0,
                  0, 0, 0,
                  0, 0, 0];

let winStates = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0]
]

let player = 1;

const playerSymbols = {1: "X", 2: "O"};

function tickBox(i) {
    if (boardState[i] === 0) {
        boardState[i] = player;
        board.children[i].innerText = playerSymbols[player];

        checkWinStates(player);

        if(player === 1) player = 2;
        else if(player === 2) player = 1;

        message.innerText = `Player ${player} turn`;
    }
}

function checkWinStates(player) {
    for (const winState of winStates) {
        let matches = 0;

        for (let i in winState) {

            if (winState[i] === 1) {
                if(boardState[i] === player) matches++;
            }
        }

        if (matches === 3) {
            console.log(`player ${player} wins`);
        }
    }
}