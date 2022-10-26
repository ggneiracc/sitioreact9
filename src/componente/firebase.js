// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBoCC1Xj9XCAMZWeanV1Lte8YwdISdmYbo',
    authDomain: 'fb-bdreact2-98222.firebaseapp.com',
    projectId: 'fb-bdreact2-98222',
    storageBucket: "fb-bdreact2-98222.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlhIeQBjYBtVcNPaBQBmpauEKfS28b7Ok",
  authDomain: "fb-bdreact.firebaseapp.com",
  databaseURL: "https://fb-bdreact.firebaseio.com",
  projectId: "fb-bdreact",
  storageBucket: "fb-bdreact.appspot.com",
  messagingSenderId: "426349223521",
  appId: "1:426349223521:web:8eeeff2e6dcd6a39341420"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/




/*
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
//import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: '*****************************',
    authDomain: '*****.firebaseapp.com',
    projectId: '*******',
    storageBucket: "*******.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
//export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
//setPersistence(auth, browserLocalPersistence);
*/


/*
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_PROJECT_ID + '.firebaseapp.com',
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
setPersistence(auth, browserLocalPersistence);
*/