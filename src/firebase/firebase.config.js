// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD36YwePoYHSYRim_S4VHjoFyes1g6sWko",
    authDomain: "blog-website-366b7.firebaseapp.com",
    projectId: "blog-website-366b7",
    storageBucket: "blog-website-366b7.appspot.com",
    messagingSenderId: "621210432991",
    appId: "1:621210432991:web:ec793158b1d9e4d4e7c06a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;