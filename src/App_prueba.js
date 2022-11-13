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
  const [orden, setOrden] = useState(0);            //Para número - falla
  const i = 1;                                      //Para número - falla
  //console.log(docsBD);  //Comentar sino genera bucle infinito useEffect

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
      //console.log("Resultado...: ", xDoc.join(", ")); //Comentar sino bucle infinito
      setDocsBD(xDoc);
      //console.log(docsBD);                          //Error lectura debe ser afuera
    });
    //unsubscribe();         //Sólo si función estuviera fuera sino es error llamarlo
  }, [idActual]);

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
    //fnRead();   //No es necesario, fue cambiado por otra fn en useEffect
  }

  return (
    <div>
      <div class="input-group">
        <label class="input-group-text" for="inputGroupFile01">
          <span className="material-icons">group_add</span>
        </label>
        <input type="text" class="form-control" id="inputGroupFile01" />
      </div>

      <div class="input-group">
        <label class="input-group-text" for="inputGroupFile01">
          <span className="material-icons">star_half</span>
        </label>
        <input type="text" class="form-control" id="inputGroupFile01" />
      </div>

      <div class="input-group">
        <label class="input-group-text" for="inputGroupFile01">
          <span className="material-icons">insert_link</span>
        </label>
        <input type="text" class="form-control" id="inputGroupFile01" />
      </div>

      <div class="input-group">
        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
          Button
        </button>
      </div>
    </div>
  );
}

export default App;