

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyC8ULNJmbOUlCeIjTq9qLpG0mLdxYMrW_8",
    authDomain: "social-media-like-facebook.firebaseapp.com",
    projectId: "social-media-like-facebook",
    storageBucket: "social-media-like-facebook.appspot.com",
    messagingSenderId: "899697519143",
    appId: "1:899697519143:web:5c14a3796594a22cbabc02",
    measurementId: "G-GT6NB48WLK",
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app