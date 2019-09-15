import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyD55XLUcTDRXdr55SSZEQfhgrIrUTpxsiA",
        authDomain: "form-cc536.firebaseapp.com",
        databaseURL: "https://form-cc536.firebaseio.com",
        projectId: "form-cc536",
        storageBucket: "",
        messagingSenderId: "431019708126",
        appId: "1:431019708126:web:c7f68da301952fced5fc4f"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

