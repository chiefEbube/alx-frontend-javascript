export default function appendToEachArrayValue(array, appendString) {
<<<<<<< HEAD
  const arr = [];
  for (const idx of array) {
    const value = idx;
    arr.push(appendString + value);
  }

  return arr;
=======
  const newArr = [];
  for (const idx of array) {
    newArr.push(appendString + idx);
  }

  return newArr;
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
}
