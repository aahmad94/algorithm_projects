var setZeroes = function (matrix) {
  const zeroCols = {};
  const zeroRows = {};

  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === 0) {
        zeroCols[columnIndex] = true;
        zeroRows[rowIndex] = true;
      }
    });
  });

  // Set zero columns:
  Object.keys(zeroCols).forEach((index) => {
    matrix.forEach(row => {
      row[index] = 0;
    });
  });
  // Set zero rows:
  Object.keys(zeroRows).forEach((index) => {
    matrix[index] = matrix[index].map(item => 0);
  });
}