// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_92cvdWCQLQO7vafrbzKNXnKqbqKRyAg",
  authDomain: "next-auth-471c4.firebaseapp.com",
  projectId: "next-auth-471c4",
  storageBucket: "next-auth-471c4.appspot.com",
  messagingSenderId: "235788821038",
  appId: "1:235788821038:web:a0da1ef612447b45a835bf",
  measurementId: "G-B9DN0796B8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);