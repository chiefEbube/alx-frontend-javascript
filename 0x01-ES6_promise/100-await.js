import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const createPromise = await createUser();
  const uploadPromise = await uploadPhoto();

  return {
    photo: uploadPromise || null,
    user: createPromise || null,
  };
}
