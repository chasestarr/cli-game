
function board(n) {
  this.map = {};
  this.storage = this.init(n);
  this.size = n;
  this.range = n * n;
}

board.prototype.init = function(n) {
  let output = [];
  let counter = 1
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(counter);
      this.map[counter] = [i, j];
      counter++
    }
    output.push(row);
  }
  return output;
}

board.prototype.update = function(index, symbol) {
  const n = this.map[index][0];
  const m = this.map[index][1];

  if (isNaN(this.storage[n][m])) {
    console.log('that space is taken, please choose again');
    return;
  }

  this.storage[n][m] = symbol; 
  this.display();
  return this.check(n, m, symbol);
}

board.prototype.check = function(n, m, player) {
  let counts = {
    row: 0,
    column: 0,
    majorDiagonal: 0,
    minorDiagonal: 0
  };

  for (let i = 0; i < this.size; i++) {
    if (this.storage[n][i] === player) counts.row++;
    if (this.storage[i][m] === player) counts.column++;
    if (this.storage[i][i] === player) counts.majorDiagonal++;
    if (this.storage[i][board.length - 1 - i] === player) counts.minorDiagonal++;
  }

  for(let c in counts) {
    if (counts[c] === this.size) 
      return true;
  }
  return false;
}

board.prototype.display = function() {
  console.log();
  for (let i = 0; i < this.size; i++) {
    displayRow(this.storage[i]);

    if (i < this.size - 1) {
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

module.exports = board;
