export default class Car {
  constructor(brand, motor, color) {
    // storing the attribute in an underscore
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  // adding the new method cloneCar
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
