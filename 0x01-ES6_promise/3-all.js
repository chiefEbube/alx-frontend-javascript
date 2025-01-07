import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
<<<<<<< HEAD
    .then((value) => {
      console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })

=======
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    })
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
    .catch(() => console.log('Signup system offline'));
}
