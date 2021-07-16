import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiDzRdUDH6Rs2nbWrnjBIPSvnfG7FvBRo",
    authDomain: "tik-tok-b0716.firebaseapp.com",
    projectId: "tik-tok-b0716",
    storageBucket: "tik-tok-b0716.appspot.com",
    messagingSenderId: "1020406248140",
    appId: "1:1020406248140:web:cee2290ed57a0649ca4869"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();

export default db;