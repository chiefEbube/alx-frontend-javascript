export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
<<<<<<< HEAD
    } else if (typeof location !== 'string') {
=======
    }
    if (typeof location !== 'string') {
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
