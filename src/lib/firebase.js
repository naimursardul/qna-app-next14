// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "qna-next14.firebaseapp.com",
  projectId: "qna-next14",
  storageBucket: "qna-next14.appspot.com",
  messagingSenderId: "597718637724",
  appId: "1:597718637724:web:4fbb636bcba7800527a159",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
