import { collection, onSnapshot, query, deleteDoc, doc } from "firebase/firestore";
//import { addDoc, updateDoc, getDoc, setDoc, increment, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import AppForm from "./componente/AppForm";
import {db} from "./componente/firebase";

function App() {  
  ///////////////////////////////////////////////////////////////////////
  ////////// READ - fnRead - LECTURA A BD ///////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [docsBD, setDocsBD] = useState([]);
  
  const fnRead = () => {
    try {
      const xColeccionConQuery = query(collection(db, "persona"));
      //const xColeccionConQuery = query(collection(db, "persona", where("nombre", "!=", "")));
      const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach( (doc) => {
          
          xDoc.push({id: doc.id, ...doc.data()});
          //console.log({id: doc.id, ...doc.data()});
        });
        setDocsBD(xDoc);
        //console.log(xDoc);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    fnRead();
  }, []);
 

  ///////////////////////////////////////////////////////////////////////
  ////////// DELETE - fnDelete - Eliminar registros /////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [idActual, setIdActual] = useState("");

  const fnDelete = async (xId) => {
    if(window.confirm("Esta seguro que desea eliminar...?")){
      await deleteDoc(doc(db, "persona", xId));
      console.log("Se elimino...");
    }
  };

  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
      <h1>sitiocopia2a3 (App.js)</h1>
      <h3>READ / DELETE</h3>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      {
        docsBD.map((p) => 
          <p key={p.id}> 
            No. 1 {p.nombre} ....
            <span onClick={() => fnDelete(p.id)}> x </span>
            ...
            <span onClick={() => setIdActual(p.id)}> A </span>
          </p> 
        )
      }      
    </div>
  );
}

export default App;