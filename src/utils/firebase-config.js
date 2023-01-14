import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDYVBGwmC4cSR26VK3TxH0yC0A6HMUtGNM",
  authDomain: "react-netflix-clone-11488.firebaseapp.com",
  projectId: "react-netflix-clone-11488",
  storageBucket: "react-netflix-clone-11488.appspot.com",
  messagingSenderId: "930596307833",
  appId: "1:930596307833:web:1df34ee6bc23bf9e6be5a8",
  measurementId: "G-9S5D7EM88F"
};

const app = initializeApp(firebaseConfig);
export const firebaseauth=getAuth(app)