process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', readInput); // handles data input

function readInput(text) {
  console.log(text);
}

function done() {
  console.log('game exited');
  process.exit();
}
