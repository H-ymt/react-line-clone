import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8rol9Ucbz8nA08-m69gN5zD9YuXZeMh8",
  authDomain: "line-clone-a5d94.firebaseapp.com",
  projectId: "line-clone-a5d94",
  storageBucket: "line-clone-a5d94.appspot.com",
  messagingSenderId: "280370380543",
  appId: "1:280370380543:web:e0aa3fc834862e374d16ca",
  measurementId: "G-WJZQ4YHXDF",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
