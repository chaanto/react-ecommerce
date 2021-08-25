import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXGcKaDxClaEvpOthPzi2U2J9-elInf8U",
    authDomain: "react-ecommerce-db-471b9.firebaseapp.com",
    projectId: "react-ecommerce-db-471b9",
    storageBucket: "react-ecommerce-db-471b9.appspot.com",
    messagingSenderId: "644831459251",
    appId: "1:644831459251:web:0339c5321734328073fdc6",
    measurementId: "G-7MJVK90B5Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompts: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;