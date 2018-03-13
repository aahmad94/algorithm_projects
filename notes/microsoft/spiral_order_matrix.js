var spiralOrder = function (matrix) {
  // prevent calling shift on an empty array
  if (matrix.length === 0) { return []; }
  let row = matrix.shift();

  // return add to shifted items the result of the function call 
  // with the reversed transposed matrix as the argument
  return row.concat(spiralOrder(transpose(matrix).reverse()));
};

const transpose = (matrix) => {
  if (matrix.length === 0) { return []; }
  return matrix[0].map((_, col) => {
    return matrix.map((row) => {
      return row[col];
    });
  });
};