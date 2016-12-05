process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', readInput); // handles data input

let board;
let turn = 0;

const boardMap = {};

function readInput(text) {
  const index = parseInt(text);

  if (isNaN(index)) {
    console.log('Enter a number');
    return;
  }

  // will need to be refactored with a larger board
  if (index > 9 || index < 1) {
    console.log('Enter an integer 1 - 9');
    return;
  }

  updateBoard(index);
}

function updateBoard(index) {
  const n = boardMap[index][0];
  const m = boardMap[index][1];

  if (board[n][m] !== 0) {
    console.log('that space is taken, please choose again');
    return;
  }
  board[n][m] = turn ? 'X' : 'O';
  turn = turn ? 0 : 1;

  // will be refactored into displayBoard function
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

function initBoard(n, m) {
  let output = [];
  let counter = 1
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
      boardMap[counter] = [i, j];
      counter++
    }
    output.push(row);
  }
  return output;
}

function checkBoard() {
  checkRows();
  checkColumns();
  checkDiagonals();
}

function checkRows() {

}

function checkColumns() {

}

function checkDiagonals() {

}

function displayBoard() {
  console.log(`\n 1 | 2 | 3 \n` + `-----------\n` + ` 4 | 5 | 6 \n` + `-----------\n` + ` 7 | 8 | 9 \n`);
  // let string = '';
  // for (let i = 0; i < board.length; i++) {

  // }
}

function init() {
  board = initBoard(3, 3); //initialize 3 x 3 board
  console.log(boardMap);
  displayBoard();
}

init();
