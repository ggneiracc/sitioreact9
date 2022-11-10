import { collection, getDocs, query, doc, deleteDoc, where, onSnapshot} from "firebase/firestore";
//import { getDoc, addDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { db } from './componente/firebase';
import AppForm from './componente/AppForm';

function App() {  
  ////////////////////////////////////////////////////////////////////////
  ////////// READ - fnRead - LECTURA BD //////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  const [idActual, setIdActual] = useState("");     //Para CREAR y UPDATE
  const [docsBD, setDocsBD] = useState([]);         //Para lectura a BD
  const [orden, setOrden] = useState(0);            //Para numero - falla
  const i = 1;                                      //Para numero - falla
  //console.log(docsBD);                              //Lectura a variable

  ////////// READ con onSnapshot - Actualiza en TIEMPPO REAL /////////////
  useEffect( () => {
    //const xColeccionConQuery = query(collection(db, "persona"));   //Sin filtro
    const xColeccionConQuery = query(collection(db, "persona"), where("nombre", "!=", ""));
    const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach((doc) => {
        //xDoc.push(doc.data().nombre);             //Datos como "texto" en array
        //xDoc.push(doc.id);                        //Datos "ID" como "texto" en array
        //xDoc.push(doc.data());                    //Datos como "Objeto"
        //xDoc.push({id: doc.id});                  //Datos "ID" como "objeto" con indice "id"
        xDoc.push({id: doc.id, ...doc.data()});     //Datos "union" de "objetos"
      });
      //console.log("Resultado...: ", xDoc.join(", "));
      setDocsBD(xDoc);
      //console.log(docsBD);                          //Error lectura debe ser afuera
    });
    //unsubscribe();                                  //Error No muesttra nada
  }, [])

/*
  ////////// READ SIN onSnapshot - NO Actualiza en TIEMPPO REAL //////////
  const fnRead = async () => {
    //const xColeccionConQuery = query(collection(db, "persona"));   //Sin filtro
    const xColeccionConQuery = query(collection(db, "persona"), where("nombre", "!=", ""));
    const xDatosBD = await getDocs(xColeccionConQuery);
    const xDoc = [];
    xDatosBD.forEach((doc) => {
      //xDoc.push(doc.data().nombre);             //Datos como "texto" en array
      //xDoc.push(doc.id);                        //Datos "ID" como "texto" en array
      //xDoc.push(doc.data());                    //Datos como "Objeto"
      //xDoc.push({id: doc.id});                  //Datos "ID" como "objeto" con indice "id"
      xDoc.push({id: doc.id, ...doc.data()});     //Datos "union" de "objetos"
    });
    console.log("Resultado...: ", xDoc.join(", "));
    setDocsBD(xDoc);
    //console.log(docsBD);                        //Error lectura debe ser afuera
  } 

  useEffect( () => {
    fnRead(); 
  }, [idActual])
*/

  ////////////////////////////////////////////////////////////////////////
  ////////// DELETE fnDelete - ELIMINAR //////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  const fnDelete = async (xId) => {
    //console.log(xId);
    if(window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, 'persona', xId));
      console.log("Se elimino... "+xId);
    }
    //fnRead();
  }

  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
      <h1>sitiocopia2 (App.js)</h1>
      <AppForm {...{idActual, setIdActual}} />
      {
        docsBD.map( (p) => 
          <p key={p.id}>
            N.{i} - {p.nombre} --- 
            <span onClick={() => fnDelete(p.id)}>x</span> 
            -- 
            <span onClick={() => setIdActual(p.id)}>A</span> 
          </p>
        ) 
      }
    </div>
  );
}

export default App;