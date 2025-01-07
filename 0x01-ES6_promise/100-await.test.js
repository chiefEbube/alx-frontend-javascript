import asyncUploadUser from './100-await';

test('asyncUploadUser returns the right value', async () => {
  const value = await asyncUploadUser();

  expect(value).toStrictEqual({
    photo: { body: 'photo-profile-1', status: 200 },
    user: { firstName: 'Guillaume', lastName: 'Salva' },
  });
});
