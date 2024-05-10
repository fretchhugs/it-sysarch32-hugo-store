// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDcb-Jh1-A-zBlvmv6uWXddHWRriNv6Q4I",
  authDomain: "hugo-onlinestore.firebaseapp.com",
  projectId: "hugo-onlinestore",
  storageBucket: "hugo-onlinestore.appspot.com",
  messagingSenderId: "1088810585997",
  appId: "1:1088810585997:web:f32ac474707f2ac4fef7c4",
  measurementId: "G-T4Q22L6KLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);


