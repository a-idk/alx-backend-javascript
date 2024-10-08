export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // getting method for the name
  get name() {
    return this._name;
  }

  // setting method for the name
  set name(value) {
    this._name = value;  // storing in an underscore attribute version
  }

  // getting method for the code
  get code() {
    return this._code;
  }

  // setting method for the code
  set code(value) {
    this._code = value;  // storing in an underscore attribute version
  }

  // 
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
