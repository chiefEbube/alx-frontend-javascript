import Building from './5-building';

<<<<<<< HEAD
class SkyHighBuilding extends Building {
=======
export default class SkyHighBuilding extends Building {
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
<<<<<<< HEAD
    return (this._floors);
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}

export default SkyHighBuilding;
=======
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
