export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // error condition
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // setting the sqft
  set sqft(value) {
    this._sqft = value;
  }

  // getting the sqft
  get sqft() {
    return this._sqft;
  }
}
