export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
<<<<<<< HEAD
    firstName: `${firstName}`,
    lastName: `${lastName}`,
=======
    firstName,
    lastName,
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
  });
}
