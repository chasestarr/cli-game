const Board = require('./board.js');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', readInput); // handles data input

let board;
let player = '🐸';

const boardMap = {};

function readInput(text) {
  const index = parseInt(text);
  if(!error(index))
    turn(index);
}

function turn(index) {
  if (board.update(index, player)) {
    win(player);
  }

  player = player === '🐸' ? '✨' : '🐸';
}

function win(p) {
  console.log(`player ${p} wins!`);
  process.exit();
}

function error(i) {
  if (isNaN(i)) {
    console.log('Enter a number');
    return true;
  }

  if (i > board.range || i < 1) {
    console.log(`Enter an integer 1 - ${board.range}`);
    return true;
  }
  return false;
}

function init() {
  board = new Board(3);
  board.display();
}

init();
