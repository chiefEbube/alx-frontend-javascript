export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
<<<<<<< HEAD
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!Array.isArray(students)) {
=======
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

<<<<<<< HEAD
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
=======
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
  }
}
