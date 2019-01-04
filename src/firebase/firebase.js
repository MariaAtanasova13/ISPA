import * as firebase from 'firebase';
// Required for side-effects
import '@firebase/firestore';
import  'firebase/storage';
const config = {
    apiKey: "AIzaSyATzrwVWGoZEsVe2r8unnBUea7EUm9wlP8",
    authDomain: "ispa-183622.firebaseapp.com",
    databaseURL: "https://ispa-183622.firebaseio.com",
    projectId: "ispa-183622",
    storageBucket: "ispa-183622.appspot.com",
    messagingSenderId: "18842010047"
};

const app = firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { app, db, auth, storage, facebookProvider };