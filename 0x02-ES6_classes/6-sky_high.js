import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // getting method for the floors
  get floors() {
    return this._floors;
  }

  // setting method for the floors
  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw TypeError('Floors must be a number');
    }
    this._floors = newFloors;
  }

  // warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
