import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

import {  getFirestore, collection,  getDocs, addDoc } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// authentication
// creating and signing in user

const auth = getAuth();
const createAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      alert("user created ");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
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
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorMessage);
    });
};
export { signIn, createAccount };


// database
// 

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//

  async function addProduct({ title, image, price, rating }) {
    try {
      const docRef = await addDoc(collection(db, "productsC"), {
        title: title,
        image: image,
        price: price,
        rating: rating,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const getProducts= async()=> {
    const querySnapshot = await getDocs(collection(db, "productsC"));
    return querySnapshot._snapshot;
  }
 

export {addProduct,db,getProducts};