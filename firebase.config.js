// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtsGRjVx0gWWVdJlRzdJxG-XOINvmZn_Q",
  authDomain: "email-auth-2-35991.firebaseapp.com",
  projectId: "email-auth-2-35991",
  storageBucket: "email-auth-2-35991.appspot.com",
  messagingSenderId: "903715689271",
  appId: "1:903715689271:web:f28b154a7d89591e0f40b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;