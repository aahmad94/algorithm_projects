// Given a 2d grid map of '1's(land) and '0's(water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

var numIslands = function (grid) {
  let count = 0;

  const numRows = grid.length;
  if (numRows === 0) {
    return 0;
  }
  const numCols = grid[0].length;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === "1") {
        count += 1;
        dfs(grid, row, col);
      }
    }
  }
  return count;
};

const dfs = (grid, row, col) => {
  const numRows = grid.length;
  const numCols = grid[0].length;

  if (row < 0 || row >= numRows || col < 0 || col >= numCols || grid[row][col] === "0") {
    return;
  }

  grid[row][col] = "0";
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col - 1);
  dfs(grid, row, col + 1);
};