const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const s = String(n);
  let best = -Infinity;
  for (let i = 0; i < s.length; i++) {
    const candidate = Number(s.slice(0, i) + s.slice(i + 1));
    if (candidate > best) best = candidate;
  }
  return best;
}

module.exports = {
  deleteDigit
};
