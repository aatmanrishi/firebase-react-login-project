// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsrNCFOQdoPJk0ujHDfOCfRfb-xT5yACI",
  authDomain: "react-auth-app-606b1.firebaseapp.com",
  projectId: "react-auth-app-606b1",
  storageBucket: "react-auth-app-606b1.appspot.com",
  messagingSenderId: "187185926976",
  appId: "1:187185926976:web:7fead9bbae62ec5dc3a0a5",
  measurementId: "G-2HVQ6F1P08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app ;
