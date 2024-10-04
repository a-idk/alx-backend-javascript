export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // code getter
  get code() {
    return this._code;
  }

  // code setter
  set code(value) {
    this._code = value;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    this._name = value;
  }

  // return currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
