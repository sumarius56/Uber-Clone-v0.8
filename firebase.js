// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC2DGZE9tIHy7GA9GYUPgAP6v4oHWL1s2s",

  authDomain: "uber-clone-48e59.firebaseapp.com",

  projectId: "uber-clone-48e59",

  storageBucket: "uber-clone-48e59.appspot.com",

  messagingSenderId: "605327587151",

  appId: "1:605327587151:web:031a5b4643730f126cf73a",

  measurementId: "G-RQYDF5ZCRJ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
const auth = getAuth();

export{app, provider, auth}