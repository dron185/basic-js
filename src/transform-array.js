const {NotImplementedError} = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const CONTROLS = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  const n = arr.length;
  // Сколько копий каждого элемента попадёт в результат
  const count = new Array(n).fill(1);
  // Помечаем 'удалён окончательно', чтобы не уходить в минус
  const deleted = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    const item = arr[i];
    if (!CONTROLS.includes(item)) continue;

    const isNext = item === '--discard-next' || item === '--double-next';
    const target = isNext ? i + 1 : i - 1;

    if (target < 0 || target >= n) continue;      // нет соседа — ничего
    if (deleted[target]) continue;                // уже удалён — ничего
    if (CONTROLS.includes(arr[target])) continue; // защита, по условию не встречается

    if (item === '--double-next' || item === '--double-prev') {
      count[target] += 1;                         // +1 копия
    } else {
      count[target] -= 1;                         // −1 копия
      if (count[target] === 0) {
        deleted[target] = true;
      }
    }
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (CONTROLS.includes(arr[i])) continue;
    for (let k = 0; k < count[i]; k++) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
