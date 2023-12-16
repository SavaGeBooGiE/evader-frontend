/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBsLHhKI8t1pNuZZX4CSv5OMViFaJqrAtU',
  authDomain: 'evader-2edf2.firebaseapp.com',
  projectId: 'evader-2edf2',
  storageBucket: 'evader-2edf2.appspot.com',
  messagingSenderId: '473772422344',
  appId: '1:473772422344:web:bd19afd09038dad0b121fd',
  measurementId: 'G-1G7LTVG6EH',
};

if (firebase.apps.length > 0) {
  firebase.app();
} else {
  firebase.initializeApp(firebaseConfig);
}

export type User = firebase.User;
export default firebase;
