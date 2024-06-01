import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1x6AVc3-yvePYPhAWBjbtVh5SeSzQT0k",
  authDomain: "wuvs-website.firebaseapp.com",
  projectId: "wuvs-website",
  storageBucket: "wuvs-website.appspot.com",
  messagingSenderId: "698530203132",
  appId: "1:698530203132:web:82c51c8f24806c4e025e79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const imgDb = getStorage(app);
