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
  apiKey: "AIzaSyAvI4l9m4MqgCnUMcfYmlCEDUwKASww3Dw",
  authDomain: "addquote-e5539.firebaseapp.com",
  projectId: "addquote-e5539",
  storageBucket: "addquote-e5539.appspot.com",
  messagingSenderId: "183958917693",
  appId: "1:183958917693:web:5fb1fee7de53e8b377d054",
  measurementId: "G-MZEG2LRNY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)
export const storage=getStorage(app)