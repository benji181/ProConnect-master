import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdAtVQ6E1n8ZURfgHBbag-qDPn5O2AlUw",
  authDomain: "proconnect-f1322.firebaseapp.com",
  projectId: "proconnect-f1322",
  storageBucket: "proconnect-f1322.firebasestorage.app",
  messagingSenderId: "931837621452",
  appId: "1:931837621452:web:804ce08868fd38ef5a7e69",
  measurementId: "G-XW1V8NBRG4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 