import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAJTiPzX42cysdXXu85lWbY0X5jyjf7zK8",
    authDomain: "gamesource-62d90.firebaseapp.com",
    projectId: "gamesource-62d90",
    storageBucket: "gamesource-62d90.firebasestorage.app",
    messagingSenderId: "236401010939",
    appId: "1:236401010939:web:1419f72629e8dd833a685e",
    measurementId: "G-937QGCSL1L"
};

initializeApp(firebaseConfig)

const DB = getFirestore();
const AUTH = getAuth();

export { DB, AUTH }