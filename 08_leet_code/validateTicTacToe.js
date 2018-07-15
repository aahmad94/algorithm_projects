// Example 1:
// Input: board = ["O  ", "   ", "   "]
// Output: false
// Explanation: The first player always plays "X".

// Example 2:
// Input: board = ["XOX", " X ", "   "]
// Output: false
// Explanation: Players take turns making moves.

// Example 3:
// Input: board = ["XXX", "   ", "OOO"]
// Output: false

// Example 4:
// Input: board = ["XOX", "O O", "XOX"]
// Output: true

var validTicTacToe = function (board) {
  const strBoard = board.reduce((el, acc) => el.concat(acc));
  const markerCounts = {};

  // generate marker counts
  for (let i = 0; i < strBoard.length; i++) {
    const marker = strBoard[i];
    if (markerCounts[marker]) {
      markerCounts[marker] += 1;
    } else {
      markerCounts[marker] = 1;
    }
  }

  let countsX = markerCounts["X"];
  let countsO = markerCounts["O"];

  if (countsO && !countsX) {
    return false;
  }

  if (countsX && !countsO && countsX > 1) {
    return false;
  }

  if (Math.abs(countsX - countsO) > 1 || countsO > countsX) {
    return false;
  }

  let winsX = 0;
  let winsO = 0;

  // check wins horizontal
  for (let i = 0; i < 3; i++) {
    if (board[i].includes("XXX")) {
      winsX += 1;
    }
    if (board[i].includes("OOO")) {
      winsO += 1;
    }
  }

  // check wins vertical
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === "X" &&
      board[1][i] === "X" &&
      board[2][i] === "X") {
      winsX += 1;
    }
    if (board[0][i] === "O" &&
      board[1][i] === "O" &&
      board[2][i] === "O") {
      winsO += 1;
    }
  }

  // check wins diaganol X
  if (board[0][0] === "X" &&
    board[1][1] === "X" &&
    board[2][2] === "X") {
    winsX += 1;
  }

  if (board[0][2] === "X" &&
    board[1][1] === "X" &&
    board[2][0] === "X") {
    winsX += 1;
  }

  // check wins diagonal O    
  if (board[0][0] === "O" &&
    board[1][1] === "O" &&
    board[2][0] === "O") {
    winsO += 1;
  }

  if (board[0][2] === "O" &&
    board[1][1] === "O" &&
    board[2][0] === "O") {
    console.log("hi");
    winsO += 1;
  }

  if (winsX + winsO > 1) {
    return false;
  }


  if (winsX === 1 && countsO >= countsX) {
    return false;
  }

  if (winsO === 1 && countsX > countsO) {
    return false;
  }


  return true;
};