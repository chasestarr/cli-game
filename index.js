process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', readInput); // handles data input

let board;
let turn = 'O';

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

  if (isNaN(board[n][m])) {
    console.log('that space is taken, please choose again');
    return;
  }

  board[n][m] = turn; 

  displayBoard();
  checkBoard(n, m, turn);
  turn = turn === 'O' ? 'X' : 'O';
}

function initBoard(n) {
  let output = [];
  let counter = 1
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(counter);
      boardMap[counter] = [i, j];
      counter++
    }
    output.push(row);
  }
  return output;
}

function checkBoard(n, m, player) {
  let counts = {
    row: 0,
    column: 0,
    majorDiagonal: 0,
    minorDiagonal: 0
  };

  for (let i = 0; i < board.length; i++) {
    if (board[n][i] === player) counts.row++;
    if (board[i][m] === player) counts.column++;
    if (board[i][i] === player) counts.majorDiagonal++;
    if (board[i][board.length - 1 - i] === player) counts.minorDiagonal++;
  }

  for(let c in counts) {
    if (counts[c] === board.length) 
      win(player);
  }
}

function win(player) {
  console.log(`player ${player} wins!`);
  process.exit();
}

function displayBoard() {
  console.log();
  for (let i = 0; i < board.length; i++) {
    displayRow(board[i]);

    if (i < board.length - 1) {
      console.log('-----------');
    }
  }
  console.log();
}

function displayRow(row) {
  let str = ''
  for (let i = 0; i < row.length; i++) {
    str += ` ${row[i]} `;

    if (i < row.length - 1) {
      str += '|';
    }
  }

  console.log(str);
}

function init() {
  board = initBoard(3); //initialize 3 x 3 board
}

init();
