var islandPerimeter = function (grid) {
  let perimeter = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        if (!grid[i - 1] || grid[i - 1][j] === 0) {
          perimeter++;
        }
        if (!grid[i + 1] || grid[i + 1][j] === 0) {
          perimeter++;
        }
        if (!grid[i][j - 1] || grid[i][j - 1] === 0) {
          perimeter++;
        }
        if (!grid[i][j + 1] || grid[i][j + 1] === 0) {
          perimeter++;
        }
      }
    }
  }
  return perimeter;
};