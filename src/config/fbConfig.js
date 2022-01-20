import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCgLOM0q-Z6OqwuTDBPYm_NmgLtG2dFkxU",
  authDomain: "fdsaaz.firebaseapp.com",
  projectId: "fdsaaz",
  storageBucket: "fdsaaz.appspot.com",
  messagingSenderId: "331311819872",
  appId: "1:331311819872:web:3b85ae30cbab38651da705",
  measurementId: "G-3T3N8FXQTZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);