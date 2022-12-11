import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFmiO9OqVKDyqkQuQgrAPhjL5jHFLkndQ",
  authDomain: "store-management-29591.firebaseapp.com",
  projectId: "store-management-29591",
  storageBucket: "store-management-29591.appspot.com",
  messagingSenderId: "92340444205",
  appId: "1:92340444205:web:0e2fab4787bb55d0436ca4"
}; 

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();