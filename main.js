//initialize game board on load
initializeBoard();
initializeCatRow();

function initializeCatRow() {
  let catRow = document.getElementById("category-row");

  for (let i = 0; i < 6; i++) {
    let box = document.createElement("div");
    box.className = "clue-box category-box";

    catRow.appendChild(box);
  }
}

function initializeBoard() {
  let board = document.getElementById("clue-board");

  //generate 5 rows then place 6 boxes in each row

  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    let boxValue = 200 * (i + 1);
    row.className = "clue-row";

    for (let j = 0; j < 6; j++) {
      let box = document.createElement("div");
      box.className = "clue-box";
      box.textContent = `$ ${boxValue}`;
      box.addEventListener("click", getClue);
      row.appendChild(box);
    }

    board.appendChild(row);
  }
}

function getClue() {
  console.log("hello");
}
