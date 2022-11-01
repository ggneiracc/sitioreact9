//////////////////////////////////////////////////////
////////// es de fb-bdreact4 /////////////////////////
//////////////////////////////////////////////////////
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBV1iAJ8Y-j_XnUEdahE1OeW_aQEKTFI3s',
    authDomain: 'fb-bdreact4-45fcc.firebaseapp.com',
    projectId: 'fb-bdreact4-45fcc',
    storageBucket: "fb-bdreact4-45fcc.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;

//////////////////////////////////////////////////////
////////// es de fb-bdreact2 /////////////////////////
//////////////////////////////////////////////////////
/*
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
*/
