// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqiwF9aeg9xA3I99kbtExRYJChcvFoPFM",
  authDomain: "student-portal-531d8.firebaseapp.com",
  projectId: "student-portal-531d8",
  storageBucket: "student-portal-531d8.appspot.com",
  messagingSenderId: "649309482688",
  appId: "1:649309482688:web:b7ffc5da5059e335a24725",
  measurementId: "G-M5DF99X9JN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
