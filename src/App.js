import { collection, getDocs, query, doc, deleteDoc, where, } from "firebase/firestore";
//import { getDoc, addDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import firebase, { db } from './componente/firebase';
import AppForm from './componente/AppForm';

function App() {  
  ////////////////////////////////////////////////////////////////////////
  ////////// READ - fnRead - LECTURA BD //////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  const [idActual, setIdActual] = useState("");     //Para CREAR y UPDATE
  const [docsBD, setDocsBD] = useState([]);         //Para lectura a BD
  const [orden, setOrden] = useState(0);            //Para numero - falla
  const i = 1;                                      //Para numero - falla

  const fnRead = async () => {
    //const tblPersona = query(collection(db, "persona"));   //Sin filtro
    const tblPersona = query(collection(db, "persona"), where("nombre", "!=", ""));
    const xDatosBD = await getDocs(tblPersona);
    const xDoc = [];
    xDatosBD.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      xDoc.push({id: doc.id, ...doc.data()});
    });
    setDocsBD(xDoc);
    //console.log(docsBD);
  } 
  
  useEffect( () => {
    fnRead(); 
  }, [idActual])

  ////////////////////////////////////////////////////////////////////////
  ////////// DELETE fnDelete - ELIMINAR //////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  const fnDelete = async (xId) => {
    //console.log(xId);
    if(window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, 'persona', xId));
      console.log("Se elimino... "+xId);
    }
    fnRead();
  }

  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
      <h1>sitiocopia2 (App.js)</h1>
      <AppForm {...{idActual, setIdActual, fnRead}} />
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