var player = "X";
const cells = ["","","","","","","","",""];
var count = 0;

function cellValue(id) {
  document.getElementById(id).innerHTML = player;
  ++count;
  cells[id] = player;
  changePlayer();
  displayGameStatus();
}

function displayGameStatus() {
  document.getElementById("game-status").innerHTML = "Player " + player + " 's turn!";
  checkWinner();
}

function changePlayer() {
  if (player == "X") {
    player = "0";
  } else if (player == "0") {
    player = "X";
  }
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    let roundWon = false;
    let winner;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = cells[winCondition[0]];
        let b = cells[winCondition[1]];
        let c = cells[winCondition[2]];
        if (a == b && b == c && c != "") {
            roundWon = true;
            winner = a;
        }
    }
    if (roundWon) {
        document.getElementById("game-status").innerHTML = winner + " won!";
        return;
    } else if (count == 9) {
        document.getElementById("game-status").innerHTML = "It's a tie!";
    }
}
