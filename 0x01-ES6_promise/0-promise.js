export default function getResponseFromAPI() {
  const success = true;
<<<<<<< HEAD
  return new Promise((resolve, reject) => {
=======
  return new Promise(((resolve, reject) => {
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
    if (success) {
      resolve();
    } else {
      reject();
    }
<<<<<<< HEAD
  });
=======
  }));
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
}
