const nQueens = function(n) {
  const board = [];
  return rec(n, board);
};

const rec = function(n, board) {
  if (board.length === n) return 1;
  let count = 0;
  for (let i = 0; i < n; i++) {
    board.push(i);
    if (isValid(board)) {
      count += rec(n, board);
    }
    board.pop();
  }
  return count;
};

const isValid = function(board) {
  const currRow = board.length - 1;
  const currCol = board[board.length - 1];
  for (let r = 0; r < board.length - 1; r++) {
    const c = board[r];
    const diff = Math.abs(currCol - c);
    if (diff === 0 || diff === Math.abs(currRow - r)) {
      return false;
    }
  }
  return true;
};

console.log(nQueens(4));