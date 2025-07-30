// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAXhKoqPTxVm461A0sy5RUK73Qopz9MA",
  authDomain: "byets-2.firebaseapp.com",
  projectId: "byets-2",
  storageBucket: "byets-2.firebasestorage.app",
  messagingSenderId: "856504973468",
  appId: "1:856504973468:web:998836ba5d2ac75bd89559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };