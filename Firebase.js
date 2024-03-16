import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDeRIxt1y0bO30AZZW-QG6OOCpBBhK9gI",
    authDomain: "balkantravel-2dd71.firebaseapp.com",
    databaseURL: "https://balkantravel-2dd71-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "balkantravel-2dd71",
    storageBucket: "balkantravel-2dd71.appspot.com",
    messagingSenderId: "524613889198",
    appId: "1:524613889198:web:f2bbd5279fd2b90c47113f",
    measurementId: "G-VKP6ZLDQNW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const db = getDatabase();

export { db };
export { auth };