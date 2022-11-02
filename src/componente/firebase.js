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
