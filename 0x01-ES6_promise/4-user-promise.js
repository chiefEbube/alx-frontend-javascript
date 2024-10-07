export default function signUpUser(firstName, lastName) {
  const success = true;
  return new Promise(((resolve) => {
    if (success) {
      resolve(
        {
          firstName,
          lastName,
        },
      );
    }
  }));
}
