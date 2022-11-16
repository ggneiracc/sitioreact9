import { collection, onSnapshot, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import AppForm from "./componente/AppForm";
import {db} from "./componente/firebase";

function App() {  
  ///////////////////////////////////////////////////////////////////////
  ////////// READ - fnRead - LECTURA A BD ///////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [docsBD, setDocsBD] = useState([]);
  console.log(docsBD);

  const fnRead = () => {
    console.log("Lectura a BD");
  }

  useEffect( () => {
    const xColeccionConQuery = query(collection(db, "persona"), where("nombre", "!=", ""));
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach( (doc) => {
        xDoc.push(doc.data().nombre);
      });

      setDocsBD(xDoc);
    });
  }, [idActual] );
  
  ///////////////////////////////////////////////////////////////////////
  ////////// DELETE - fnDelete - Eliminar registros /////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [idActual, setIdActual] = useState("");

  const fnDelete = () => {
    console.log("Se elimino...");
  };


  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
      <h1>sitiocopia2a3 (App.js)</h1>
      <h3>READ / DELETE</h3>
      <AppForm {...{idActual, setIdActual, fnRead}} />
      Hola mundo...      
    </div>
  );
}

export default App;