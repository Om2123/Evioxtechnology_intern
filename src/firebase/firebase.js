import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

import {  getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication
// creating and signing in user

const auth = getAuth();
const createAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      alert("user created ");
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      // ..
      alert(errorMessage);
      console.log(errorMessage);
    });
};
const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("user logged ");
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
};
export { signIn, createAccount };


// database

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
 
export { db , auth };