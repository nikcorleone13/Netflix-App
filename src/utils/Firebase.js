// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnN32LTDJg872iUiRNA35yr8juvf3c5iM",
  authDomain: "netflix-app-84ce7.firebaseapp.com",
  projectId: "netflix-app-84ce7",
  storageBucket: "netflix-app-84ce7.appspot.com",
  messagingSenderId: "999072409595",
  appId: "1:999072409595:web:5c2c2c6d69c4bf33894d5e",
  measurementId: "G-NJK0LR3M3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);