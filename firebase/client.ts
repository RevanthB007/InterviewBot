// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP0LtAGqbsmRkIkPtzEgyews77IAOTD_Q",
  authDomain: "interviewbot-34441.firebaseapp.com",
  projectId: "interviewbot-34441",
  storageBucket: "interviewbot-34441.firebasestorage.app",
  messagingSenderId: "438763095096",
  appId: "1:438763095096:web:e21bdd36be1d60bc9cd2cd",
  measurementId: "G-X12E30MBBC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);