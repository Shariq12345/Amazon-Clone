import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsQUDHCQ1gtFHklVGxomD1cO8H8rDMpWM",
  authDomain: "challenge-d23b8.firebaseapp.com",
  projectId: "challenge-d23b8",
  storageBucket: "challenge-d23b8.appspot.com",
  messagingSenderId: "98987295658",
  appId: "1:98987295658:web:95ae3979a2ec689ea461d3",
  measurementId: "G-X8N3DYSWJJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
