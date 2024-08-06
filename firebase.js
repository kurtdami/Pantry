// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlWffJkNjhscOFKRk6W1_6pClCVHnfO_E",
  authDomain: "hspantryapp-16854.firebaseapp.com",
  projectId: "hspantryapp-16854",
  storageBucket: "hspantryapp-16854.appspot.com",
  messagingSenderId: "582773468794",
  appId: "1:582773468794:web:fc06b2dbbd2acef2b395c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { app, firestore };