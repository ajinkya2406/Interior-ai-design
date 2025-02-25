// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-11441.firebaseapp.com",
  projectId: "ai-room-11441",
  storageBucket: "ai-room-11441.firebasestorage.app",
  messagingSenderId: "768478307432",
  appId: "1:768478307432:web:548f98623fe838cdadc7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage=getStorage(app)