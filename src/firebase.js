// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDgmL0sEcHDZ7wiR26Cr4vuNsh5Fq8dy0Q",

  authDomain: "portfolio-5ecc7.firebaseapp.com",

  projectId: "portfolio-5ecc7",

  storageBucket: "portfolio-5ecc7.appspot.com",

  messagingSenderId: "132377156893",

  appId: "1:132377156893:web:1e88e848ae71f347f955f4",

  measurementId: "G-YL36QBS07Y"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);