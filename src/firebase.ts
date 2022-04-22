import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { getInstallations, getId } from '@firebase/installations';

const firebase = initializeApp(firebaseConfig);
const installations = getInstallations(firebase);

export { firebase };

export const requestForInstallationID = () => {
  return getId(installations)
    .then(id => {
      if (id) {
        console.log('current installation id: ', id);
      return id
      } else {
        console.log('No installation id.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving installation token. ', err);
    });
};