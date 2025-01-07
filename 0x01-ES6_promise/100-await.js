import { uploadPhoto, createUser } from './utils';

<<<<<<< HEAD
const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
=======
export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
<<<<<<< HEAD
};

export default asyncUploadUser;
=======
}
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
