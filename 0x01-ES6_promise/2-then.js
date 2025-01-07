export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
<<<<<<< HEAD
    .catch(() => new Error())
=======
    .catch(() => (Error()))
>>>>>>> 97529d80e788bf3323dd5d6216c550f957f05851
    .finally(() => console.log('Got a response from the API'));
}
