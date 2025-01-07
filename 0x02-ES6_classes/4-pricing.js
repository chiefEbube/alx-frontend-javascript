import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
<<<<<<< HEAD
    } else if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
=======
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currenct must be an instance of class Currency');
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

<<<<<<< HEAD
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
=======
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currenct must be an instance of class Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency.code})`;
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
<<<<<<< HEAD
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }

=======
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
    return amount * conversionRate;
  }
}
