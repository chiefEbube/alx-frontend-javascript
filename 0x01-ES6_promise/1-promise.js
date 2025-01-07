<<<<<<< HEAD
export default function (boolean) {
  return new Promise((resolve, reject) => {
=======
export default function getFullResponseFromAPI(success) {
  return new Promise(((resolve, reject) => {
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
    const object = {
      status: 200,
      body: 'Success',
    };
<<<<<<< HEAD

    if (boolean === true) {
=======
    if (success) {
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
<<<<<<< HEAD
  });
=======
  }));
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
}
