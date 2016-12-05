process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', readInput); // handles data input

let board;
let turn = 0;

function readInput(text) {
  const index = parseInt(text);

  if (isNaN(index)) {
    console.log('Enter a number');
    return;
  }

  if (index >= 9 || index <= 1) {
    console.log('Enter an integer 1 - 9');
    return;
  }
}

function initBoard(n, m) {
  let output = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    output.push(row);
  }
  return output;
}

function displayBoard() {
  console.log(`\n 1 | 2 | 3 \n` + `-----------\n` + ` 4 | 5 | 6 \n` + `-----------\n` + ` 7 | 8 | 9 \n`);
  // let string = '';
  // for (let i = 0; i < board.length; i++) {

  // }
}

function init() {

  board = initBoard(3, 3); //initialize 3 x 3 board
  displayBoard();
}

init();
