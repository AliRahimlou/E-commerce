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

export const createUserProfileDocument = async(userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`)


const snapShot = await userRef.get()

if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

try{
    await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
    })

}catch(error){
    console.log('error creating the user', error.message);
}
}

return userRef;

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
   return await batch.commit()

};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator,collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;
