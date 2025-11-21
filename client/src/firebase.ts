import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBV-GHwBk1Bibx9xolT7IdvsQ8mjgO-fkU",
  authDomain: "notes-uno.firebaseapp.com",
  databaseURL: "https://notes-uno-default-rtdb.firebaseio.com",
  projectId: "notes-uno",
  storageBucket: "notes-uno.firebasestorage.app",
  messagingSenderId: "1025777646528",
  appId: "1:1025777646528:web:2f6bc79f92a5ca04256625",
  measurementId: "G-G17GF41EWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
