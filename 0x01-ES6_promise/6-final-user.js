import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const uploadPromise = uploadPhoto(fileName);
  const signUpPromise = signUpUser(firstName, lastName);

  return Promise.allSettled([uploadPromise, signUpPromise])
    .then((results) => results.map((result) => (
      {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }
    )));
}
