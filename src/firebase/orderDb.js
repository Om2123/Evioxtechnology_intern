import { addDoc, collection, deleteDoc, doc,where, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";

const addOrder = async (order) => {
  const data = new Date();
  try {
    const cdate = data.getDate().toString();
    const cmonth = data.getMonth().toString();
    await addDoc(collection(db, "orders"), {
      email: order.email,
      orderPrice: order.sumOfBasket,
      orderDate: cdate,
      orderMonth: cmonth,
      orderProducts: order.basket,
      orderStatus: "pending",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOrders = async (email) => {
  try {
    const q = query(collection(db, "orders"), where("email", "==", email));

    const docSnap = await getDocs(q);
    return docSnap._snapshot.docChanges;
  } catch (error) {
    console.log(error.message);
  }
};
const removeOrderFB = async (id) => {
  try {
    await deleteDoc(doc(db, "orders", id));
  } catch (error) {}
};
export {addOrder,getOrders,removeOrderFB};
