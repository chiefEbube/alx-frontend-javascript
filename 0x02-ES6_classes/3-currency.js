export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
<<<<<<< HEAD
    } else if (typeof name !== 'string') {
=======
    }
    if (typeof name !== 'string') {
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

<<<<<<< HEAD
  get name() {
    return this._name;
  }

=======
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
  get code() {
    return this._code;
  }

<<<<<<< HEAD
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
=======
  get name() {
    return this._name;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
