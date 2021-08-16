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
  checkhWinner();
}

function changePlayer() {
  if (player == "X") {
    player = "0";
  } else if (player == "0") {
    player = "X";
  }
}

function checkhWinner() {
  if (cells[0] == cells[1] && cells[1] == cells[2] && cells[2] != "") {
    document.getElementById("game-status").innerHTML = cells[0] + " won!";
  }
  else if (cells[3] == cells[4] && cells[4] == cells[5] && cells[5] != "") {
    document.getElementById("game-status").innerHTML = cells[3] + " won!";
  }
  else if (cells[6] == cells[7] && cells[7] == cells[8] && cells[8] != "") {
    document.getElementById("game-status").innerHTML = cells[6] + " won!";
  }
  else if (cells[0] == cells[3] && cells[3] == cells[6] && cells[6] != "") {
    document.getElementById("game-status").innerHTML = cells[0] + " won!";
  }
  else if (cells[1] == cells[4] && cells[4] == cells[7] && cells[7] != "") {
    document.getElementById("game-status").innerHTML = cells[1] + " won!";
  }
  else if (cells[2] == cells[5] && cells[5] == cells[8] && cells[8] != "") {
    document.getElementById("game-status").innerHTML = cells[2] + " won!";
  }
  else if (cells[0] == cells[4] && cells[4] == cells[8] && cells[8] != "") {
    document.getElementById("game-status").innerHTML = cells[0] + " won!";
  }
  else if (cells[2] == cells[4] && cells[4] == cells[6] && cells[6] != "") {
    document.getElementById("game-status").innerHTML = cells[2] + " won!";
  }
  else if (count == 9) {
    document.getElementById("game-status").innerHTML = "Tie!";
  }
}
