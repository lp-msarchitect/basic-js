const chainMaker = {
  _currentChain: [],
  getLength() {
    return this._currentChain.length;
  },
  addLink(value = " ") {
    this._currentChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position > this.getLength() ||
      position < 1
    ) {
      this._currentChain = [];
      throw "Error";
    }

    this._currentChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._currentChain.reverse();
    return this;
  },
  finishChain() {
    let resultStr = this._currentChain.join("~~");
    this._currentChain = [];
    return resultStr;
  }
};

module.exports = chainMaker;
