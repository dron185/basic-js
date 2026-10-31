const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  // Проверяем внутренний слот [[DateValue]] — ловим подделки
  let time;
  try {
    time = Date.prototype.getTime.call(date);
  } catch {
    throw new Error('Invalid date!');
  }

  // Настоящий Date, но с невалидной датой, например new Date('abc')
  if (Number.isNaN(time)) {
    throw new Error('Invalid date!');
  }

  // getMonth тоже вызываем через прототип — на случай переопределения на объекте
  const month = Date.prototype.getMonth.call(date);

  if (month === 11 || month <= 1) return 'winter';   // дек, янв, фев
  if (month <= 4) return 'spring';                    // мар, апр, май
  if (month <= 7) return 'summer';                    // июн, июл, авг
  return 'autumn';                                    // сен, окт, ноя
}


module.exports = {
  getSeason
};
