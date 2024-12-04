// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0LeKGtiI0y1tkUoCykmYigsi26XNYf3o",
  authDomain: "myfirstapp-4cb12.firebaseapp.com",
  projectId: "myfirstapp-4cb12",
  storageBucket: "myfirstapp-4cb12.appspot.com",
  messagingSenderId: "90860150750",
  appId: "1:90860150750:web:f6c142378a950a6d81c74f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
