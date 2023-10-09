// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = import.meta.env.VITE_FIRESTORE_API;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "e-commerce-928fb.firebaseapp.com",
  projectId: "e-commerce-928fb",
  storageBucket: "e-commerce-928fb.appspot.com",
  messagingSenderId: "1059482009497",
  appId: "1:1059482009497:web:5ae741638e5595122d9d08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
