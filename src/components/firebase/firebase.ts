// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHPQwEZbQ-kyNDitwLzReedJaUXOJOB8Y",
  authDomain: "online-store-e8805.firebaseapp.com",
  projectId: "online-store-e8805",
  storageBucket: "online-store-e8805.appspot.com",
  messagingSenderId: "1059292569302",
  appId: "1:1059292569302:web:c9d5a142e36de26cdb7377",
  measurementId: "G-5SB5MF3DYY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);