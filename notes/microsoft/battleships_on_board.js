// Given an 2D board, count how many battleships are in it.The battleships are represented with 'X's, empty slots are represented with '.'s.You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically.In other words, they can only be made of the shape 1xN(1 row, N columns) or Nx1(N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

var countBattleships = function (board) {
  let numShips = 0;
  const rows = board.length;
  const cols = board[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "X") {
        numShips += 1;
        shipsDfs(r, c, board);
      }
    }
  }
  return numShips;
};

const shipsDfs = function (r, c, board) {
  const rows = board.length;
  const cols = board[0].length;
  if ((r < 0) || (c < 0) || (r >= rows) || (c >= cols) || (board[r][c] === ".")) {
    return;
  }
  board[r][c] = ".";
  shipsDfs(r - 1, c, board);
  shipsDfs(r + 1, c, board);
  shipsDfs(r, c - 1, board);
  shipsDfs(r, c + 1, board);
}