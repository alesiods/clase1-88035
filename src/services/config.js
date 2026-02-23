import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "marolio-88035.firebaseapp.com",
  projectId: "marolio-88035",
  storageBucket: "marolio-88035.firebasestorage.app",
  messagingSenderId: "230653751904",
  appId: "1:230653751904:web:c359fc89f62d9154318905"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)