export default function getFullResponseFromAPI(success) {
  return new Promise(((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  }));
}
