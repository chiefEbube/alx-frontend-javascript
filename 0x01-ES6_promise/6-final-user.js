import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const uploadPromise = uploadPhoto(fileName);
  const signUpPromise = signUpUser(firstName, lastName);

  return Promise.allSettled([uploadPromise, signUpPromise])
    .then((results) => {
      const arr = [];
      results.forEach((result) => {
        arr.push({
          status: result.status,
          value: result.value || result.reason,
        });
      });
    });
}
