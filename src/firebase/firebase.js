import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

import {  getFirestore, collection,  getDocs, addDoc,  getDoc, doc, where, query } from "firebase/firestore";

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
    try {
      
      const querySnapshot = await getDocs(collection(db, "productsC" ));
      return querySnapshot._snapshot;
    } catch (error) {
      console.log(error.message);
    }
  }
  const getProductById = async(id)=>{
    try {
      const docRef = doc(db, "productsC", id.id);
      const docSnap = await getDoc(docRef);

      return docSnap._document.data.value.mapValue.fields;
    } catch (error) {
      console.log(error.message);
      
    }
    
  }
  const getComments= async(title)=>{
    try {
      const q = query(collection(db, "reviews"), where("title", "==", title));

      const docSnap = await getDocs(q);
      let a = [];
      docSnap._snapshot.docChanges.forEach((doc) => {
        a.push(doc.doc.data.value.mapValue)
      })
      // console.log(a);
      return a;
    } catch (error) {
        console.log(error.message);
    }
  }
  const addNewReview = async(title,newReview)=>{
    try {
      const docRef = await addDoc(collection(db, "reviews"), {
        title: title,
        review:newReview
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

export {addProduct,db,getProducts,getComments,getProductById ,addNewReview};