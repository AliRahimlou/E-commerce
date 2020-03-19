import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6G4utJGfVM9EyaZuXgm9YlgukL4azyHQ",
    authDomain: "e-mixed.firebaseapp.com",
    databaseURL: "https://e-mixed.firebaseio.com",
    projectId: "e-mixed",
    storageBucket: "e-mixed.appspot.com",
    messagingSenderId: "859638936519",
    appId: "1:859638936519:web:805234d1c9c9938fb69fe2",
    measurementId: "G-Z6VX6FE222"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;
  