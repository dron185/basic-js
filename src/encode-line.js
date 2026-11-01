const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine( str ) {
  let result = '';
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (j < str.length && str[j] === str[i]) j++;
    const count = j - i;
    result += (count > 1 ? count : '') + str[i];
    i = j;
  }

  return result;
}

module.exports = {
  encodeLine
};
