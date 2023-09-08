// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4eOFNsUMsrGaLfbWoLaC0UVVVvHhEysA",
  authDomain: "food-order-8cf11.firebaseapp.com",
  databaseURL: "https://food-order-8cf11-default-rtdb.firebaseio.com",
  projectId: "food-order-8cf11",
  storageBucket: "food-order-8cf11.appspot.com",
  messagingSenderId: "629029884600",
  appId: "1:629029884600:web:a43b12d013d65a3d801a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);