
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Cr4YEA9ziQ8FyZDTEH9qBQC4e14y7XE",
  authDomain: "react--login-a9001.firebaseapp.com",
  projectId: "react--login-a9001",
  storageBucket: "react--login-a9001.appspot.com",
  messagingSenderId: "352550865740",
  appId: "1:352550865740:web:3af9ef28ae4dd0d4a2dde9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)