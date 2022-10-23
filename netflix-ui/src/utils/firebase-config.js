// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBovVzL71c3gXy8-c75sdNRGpKWadyAxwc",
  authDomain: "netflix-3b36e.firebaseapp.com",
  projectId: "netflix-3b36e",
  storageBucket: "netflix-3b36e.appspot.com",
  messagingSenderId: "776320221652",
  appId: "1:776320221652:web:e9d1b40497f1ed1e605641",
  measurementId: "G-H081BBK289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);