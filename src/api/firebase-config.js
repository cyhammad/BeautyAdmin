// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging/sw";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA1x52msGrW7yRrP33ww7HRqZfGsY1SJY",
  authDomain: "beautyapp-f9b14.firebaseapp.com",
  projectId: "beautyapp-f9b14",
  storageBucket: "beautyapp-f9b14.appspot.com",
  messagingSenderId: "351076444305",
  appId: "1:351076444305:web:7a4696dcc7d48f5db3f730",
};
/* const firebaseConfig = {
  apiKey: "AIzaSyAWkmK5lH5wWelBt9Eskkr-4pXZE_g0Kow",
  authDomain: "beautyapp-ef9d8.firebaseapp.com",
  projectId: "beautyapp-ef9d8",
  storageBucket: "beautyapp-ef9d8.appspot.com",
  messagingSenderId: "773980202785",
  appId: "1:773980202785:web:2308b42db9008cb2078060",
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const messaging = getMessaging(app);
