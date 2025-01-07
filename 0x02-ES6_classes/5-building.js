export default class Building {
  constructor(sqft = 0) {
    if (this.constructor !== Building
<<<<<<< HEAD
        && typeof this.evacuationWarningMessage !== 'function') {
=======
            && typeof this.evacuationWarningMessage !== 'function') {
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
