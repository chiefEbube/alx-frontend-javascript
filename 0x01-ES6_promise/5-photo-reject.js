export default function uploadPhoto(filename) {
<<<<<<< HEAD
  return Promise.reject(Error(`${filename} cannot be processed`));
=======
  return Promise.reject(new Error(`${filename} cannot be processed`));
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
}
