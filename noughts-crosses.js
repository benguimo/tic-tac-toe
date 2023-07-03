const changePlayer = document.getElementById("players")
const getButtons = document.getElementById("parent")

let box = [0,0,0,
           0,0,0,
           0,0,0]

let player = 1

const playerSymbols = {1: "X", 2: "O"}

function tickBox (i) {
    box[i] = player
    getButtons.children[i].innerText = playerSymbols[player]

    if(player === 1) {
        player++
    }

    else if(player === 2) {
        player--
    }
changePlayer.innerText = `Player ${player} turn`
console.log(box)

}




