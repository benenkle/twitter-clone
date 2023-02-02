import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9h2YrzuLl9ZYGauJiMZ18q2pRyKSJn7k",
  authDomain: "twitter-clone-2430a.firebaseapp.com",
  projectId: "twitter-clone-2430a",
  storageBucket: "twitter-clone-2430a.appspot.com",
  messagingSenderId: "148023124241",
  appId: "1:148023124241:web:8402989f7fa43320b16cb0",
  measurementId: "G-52LGPS5SBZ"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;