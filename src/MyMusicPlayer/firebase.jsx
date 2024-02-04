
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAP-qnfRxCWonDZMACy_i-INJOdfQsBnDA",
    authDomain: "musicwebsite-25571.firebaseapp.com",
    projectId: "musicwebsite-25571",
    storageBucket: "musicwebsite-25571.appspot.com",
    messagingSenderId: "958519959911",
    appId: "1:958519959911:web:4dcf66e2532557b7384fc2",
    measurementId: "G-FJLLFR6YMW"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export const storage = firebase.storage();
