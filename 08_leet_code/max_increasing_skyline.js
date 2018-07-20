var maxIncreaseKeepingSkyline = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let sum = 0;
  const rowsMaxHeights = {};
  const colsMaxHeights = {};

  for (let r = 0; r < rows; r++) {
    let rowMaxHeight = 0;
    let colMaxHeight = 0;

    for (let c = 0; c < cols; c++) {
      rowMaxHeight = Math.max(rowMaxHeight, grid[r][c]);
      colMaxHeight = Math.max(colMaxHeight, grid[c][r])
    }
    rowsMaxHeights[r] = rowMaxHeight;
    colsMaxHeights[r] = colMaxHeight;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const newVal = Math.min(rowsMaxHeights[r], colsMaxHeights[c]);
      sum += newVal - grid[r][c];
      grid[r][c] = newVal;
    }
  }

  return sum;
};