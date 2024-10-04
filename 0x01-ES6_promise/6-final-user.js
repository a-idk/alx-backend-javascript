import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fName)];
  /* setting variable to const */
  const res = [];
  return Promise.allSettled(promises).then((results) => {
    results.map(({ status, value, reason }) => (
      res.push({
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));

    return res;
  });
}
