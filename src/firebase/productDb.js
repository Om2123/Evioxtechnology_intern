import { collection, doc,addDoc,getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function addProduct({ title, image, price, rating }) {
  // try {
  //   const docRef = await addDoc(collection(db, "productsC"), {
  //     title: title,
  //     image: image,
  //     price: price,
  //     rating: rating,
  //   });

  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
}
const getProducts = async () => {
  // try {
  //   const querySnapshot = await getDocs(collection(db, "productsC"));
  //   return querySnapshot._snapshot;
  // } catch (error) {
  //   console.log(error.message);
  // }
};
const getProductById = async (id) => {
  // try {
  //   const docRef = doc(db, "productsC", id.id);
  //   const docSnap = await getDoc(docRef);

  //   return docSnap._document.data.value.mapValue.fields;
  // } catch (error) {
  //   console.log(error.message);
  // }
};
export { addProduct, getProducts, getProductById };