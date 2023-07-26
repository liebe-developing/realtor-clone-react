// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "realtor-clone-react-79b2a.firebaseapp.com",
  projectId: "realtor-clone-react-79b2a",
  storageBucket: "realtor-clone-react-79b2a.appspot.com",
  messagingSenderId: "378339639282",
  appId: "1:378339639282:web:9be036ec24d6166fea756b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
