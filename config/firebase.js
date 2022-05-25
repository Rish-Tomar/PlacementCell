// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLb3lJSQqH68zL3BTab2jk7KE9bh8_IN4",
  authDomain: "skilltest1-afc3a.firebaseapp.com",
  projectId: "skilltest1-afc3a",
  storageBucket: "skilltest1-afc3a.appspot.com",
  messagingSenderId: "683532892195",
  appId: "1:683532892195:web:679ecadc74c1d183301996",
  measurementId: "G-KSNY8EVPJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);