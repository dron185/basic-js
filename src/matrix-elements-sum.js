const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  let sum = 0;
  const cols = matrix[0].length;

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < matrix.length; r++) {
      if (matrix[r][c] === 0) break;   // ниже — «заражено», пропускаем столбец
      sum += matrix[r][c];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
