import firebase, { db } from './firebase';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";


//import React from 'react'       //rafce     //sfc
//import { async } from '@firebase/util';

//CREAR
export const fnCrear = (name) => {              //GuardarRegistroPersona
    //obj = { name } Ejemplo //personas es coleccion de firebase
    addDoc(collection(db, 'personas'), { name });         
}

//READ
export const fnRead = async () => {             //reportePersonas
    const result = await getDocs(query(collection(db, 'personas')));
    return result;
}

//UPDATE
export const fnUpdate = async (id, name) => {   //updatePerson
    await await updateDoc(doc(db, 'personas', id), { name });;
}

//DELETE
export const fnDelete = async (id) => {         //borrarRegistro
    await deleteDoc(doc(db, 'personas', id));
}
 


//ALTA
//addDoc(collection(db, 'items'), obj);         //obj = { name } Ejemplo

//CONSULTA
//const result = await getDocs(query(collection(db, 'items')));
//    return getArrayFromCollection(result);

//REMOVE
//await deleteDoc(doc(collection(db, 'items'), id));
//await deleteDoc(doc(db, 'items', id));    //¿Es igual a anterior?

//UPDATE
//await updateDoc(doc(collection(db, 'items'), id), obj);
//await updateDoc(doc(db, 'items', id), obj);    //¿Es igual a anterior?