// Import the functions you need from the SDKs you need
import {
    initializeApp,
    getApp,
    getApps
} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoVf5BTJus0KuyzSQElMr6m7HcH8FhtPw",
    authDomain: "insta-774db.firebaseapp.com",
    projectId: "insta-774db",
    storageBucket: "insta-774db.appspot.com",
    messagingSenderId: "945695019707",
    appId: "1:945695019707:web:3862860ce76c9824d58f9e",
    measurementId: "G-1ZNHN5KV7J"
};

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default db;
export { storage, auth, provider };