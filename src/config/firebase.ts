import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCNuyDXk51JJiVTzFqFD617ZibJ-fu2T_I",
    authDomain: "fitlog-a8fd9.firebaseapp.com",
    projectId: "fitlog-a8fd9",
    storageBucket: "fitlog-a8fd9.appspot.com",
    messagingSenderId: "406032000795",
    appId: "1:406032000795:web:142c51c80a589d7cf795be",
    measurementId: "G-NGK7WTBQ7X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);