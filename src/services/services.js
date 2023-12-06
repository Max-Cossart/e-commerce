import { db } from "../config/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const getActiveWear = async () => {
  const collectionRef = collection(db, "ActiveWear");
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addData = async (data) => {
  const collectionRef = collection(db, "ActiveWear");
  const newActiveWearRef = await addDoc(collectionRef, data);
  return newActiveWearRef;
};
