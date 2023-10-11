import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const getComments = async (title) => {
  try {
    const q = query(collection(db, "reviews"), where("title", "==", title));

    const docSnap = await getDocs(q);
    let a = [];
    docSnap._snapshot.docChanges.forEach((doc) => {
      a.push(doc.doc.data.value.mapValue);
    });
    // console.log(a);
    return a;
  } catch (error) {
    console.log(error.message);
  }
};
const addNewReview = async (title, newReview) => {
  try {
    const docRef = await addDoc(collection(db, "reviews"), {
      title: title,
      review: newReview,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export {getComments,addNewReview};
