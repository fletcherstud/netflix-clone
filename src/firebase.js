import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaJPVEGbcG9Sfmpwd06_eaj9Qvz0Z6U80",
  authDomain: "netflix-clone-1dc7a.firebaseapp.com",
  projectId: "netflix-clone-1dc7a",
  storageBucket: "netflix-clone-1dc7a.appspot.com",
  messagingSenderId: "411905260798",
  appId: "1:411905260798:web:c0df2d2fbce7a4920f39af",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
