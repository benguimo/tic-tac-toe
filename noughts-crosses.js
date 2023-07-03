const message = document.getElementById("players")
const board = document.getElementById("parent")
const tieScore = document.getElementById("tie-score")
const player1Score = document.getElementById("player1-score")
const player2Score = document.getElementById("player2-score")

let boardState

let winStates = [
    [1, 1, 1,
     0, 0, 0,
     0, 0, 0],

    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0]
]

let player

const playerSymbols = {1: "X", 2: "O"};

let messageText

let gameOver

let nextPlayer  = 1

let scoreUpdate = {1 : 0, 2 : 0, tie: 0}

function foundZero(num) {
    if (num === 0) return true;
    else return false;
}

function tickBox(square) {
    if (!gameOver && boardState[square] === 0) {
        boardState[square] = player;
        board.children[square].innerText = playerSymbols[player];

        if (checkWinStates(player)) {
            messageText = `PLAYER ${player} WINS!`
            scoreUpdate[player]++
            player1Score.innerText = scoreUpdate[1]
            player2Score.innerText = scoreUpdate[2]
            gameOver = true
        }

        else if (boardState.some(foundZero) === false) {
            messageText = `TIE!`
            scoreUpdate.tie++
            tieScore.innerText = scoreUpdate.tie
            gameOver = true
        }

        else{  
            if(player === 1) player = 2;
            else if(player === 2) player = 1;
            messageText = `Player ${player} turn`
        }

        message.innerText = messageText
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
            return true
        }
    }
    return false
}


function reset() {

     boardState = [0, 0, 0,
                   0, 0, 0,
                   0, 0, 0];

        for(const child of board.children) {
            child.innerText = ""
        }
        gameOver = false

        player = nextPlayer
        if(player === 1) nextPlayer = 2;
        else if(player === 2) nextPlayer = 1;
        message.innerText = `Player ${player} turn`
}


reset()


