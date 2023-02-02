import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "PRIVATE-API-KEY",
  authDomain: "PRIVATE-AUTH-DOMAIN",
  projectId: "PRIVATE-PROJECT-ID",
  storageBucket: "PRIVATE-SB",
  messagingSenderId: "PRIVATE-MSI",
  appId: "PRIVATE-APP-ID",
  measurementId: "PRIVATE-MEASUREMENT-ID"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;
