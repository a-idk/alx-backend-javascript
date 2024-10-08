export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // setting amount
  set amount(amount) {
    this._amount = amount;
  }

  // getting amount
  get amount() {
    return this._amount;
  }

  // setting currency
  set currency(currency) {
    this._currency = currency;
  }

  // getting currency
  get currency() {
    return this._currency;
  }

  // displaying the price
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  // Converting to price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
