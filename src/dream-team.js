const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const firstLetters = members
    .filter((m) => typeof m === 'string')
    .map((m) => m.trim())
    .filter((m) => m.length > 0)
    .map((m) => m[0].toUpperCase());

  if (firstLetters.length === 0) {
    return false;
  }

  return firstLetters.sort().join('');
}

module.exports = {
  createDreamTeam
};
