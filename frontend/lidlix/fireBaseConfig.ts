// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaGuAoL5NDs9VOGwdqGEKcp-f5fVE5nHo",
  authDomain: "my-project-45e7e.firebaseapp.com",
  projectId: "my-project-45e7e",
  storageBucket: "my-project-45e7e.appspot.com",
  messagingSenderId: "305710141588",
  appId: "1:305710141588:web:5aa3eb0032af7f77bd2481",
  measurementId: "G-W6NGT00GBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const dbtest = getFirestore(app)