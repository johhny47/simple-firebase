// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyT__5ms2ZVYf5xu51afAL_NppYUL7ToM",
  authDomain: "simple-firebase-6048f.firebaseapp.com",
  projectId: "simple-firebase-6048f",
  storageBucket: "simple-firebase-6048f.firebasestorage.app",
  messagingSenderId: "679420058151",
  appId: "1:679420058151:web:34d89f8b10b69c42ed4c02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;