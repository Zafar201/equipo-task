// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxaUi3QXw_RSJMPpvLhpwMaHie35egOns",
  authDomain: "equipo-a488c.firebaseapp.com",
  projectId: "equipo-a488c",
  storageBucket: "equipo-a488c.appspot.com",
  messagingSenderId: "183034608919",
  appId: "1:183034608919:web:cef0908f8a3cabf3408b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;