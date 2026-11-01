const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return this._crypt(message, key, 1);
  }

  decrypt(message, key) {
    return this._crypt(message, key, -1);
  }

  _crypt(message, key, direction) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const A = 65;
    const keyLetters = String(key).toLowerCase().replace(/[^a-z]/g, '');
    let keyIndex = 0;
    let result = '';

    for (const ch of String(message)) {
      if (/[a-z]/i.test(ch)) {
        const shift = keyLetters.length
          ? keyLetters.charCodeAt(keyIndex % keyLetters.length) - 97
          : 0;
        const base = ch.toUpperCase().charCodeAt(0) - A;
        const newBase = ((base + direction * shift) % 26 + 26) % 26;
        result += String.fromCharCode(A + newBase);
        keyIndex++;
      } else {
        result += ch;
      }
    }

    return this.direct ? result : [...result].reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
