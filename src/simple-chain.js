const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _links: [],

  addLink(value) {
    this._links.push(arguments.length === 0 ? '' : String(value));
    return this;
  },

  removeLink(position) {
    const len = this._links.length;
    const isValid =
      typeof position === 'number' &&
      Number.isInteger(position) &&
      position >= 1 &&
      position <= len;

    if (!isValid) {
      this._links = [];
      throw new Error("You can't remove incorrect link!");
    }

    this._links.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this._links.reverse();
    return this;
  },

  getLength() {
    return this._links.length;
  },

  finishChain() {
    const result = this._links.map((v) => `( ${v} )`).join('~~');
    this._links = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
