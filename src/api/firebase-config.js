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
  apiKey: "AIzaSyAMuv71tuqcGKDrIbp7LhFtTPaXYsAdzok",
  authDomain: "fatimabeautyapp.firebaseapp.com",
  databaseURL: "https://fatimabeautyapp-default-rtdb.firebaseio.com",
  projectId: "fatimabeautyapp",
  storageBucket: "fatimabeautyapp.appspot.com",
  messagingSenderId: "530824876478",
  appId: "1:530824876478:web:9689c4763d9230853469ef",
  measurementId: "G-NGB0SVFQLZ"
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
