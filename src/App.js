import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import AppForm from "./componente/AppForm";
import {db} from "./componente/firebase";


function App() {  
  ///////////////////////////////////////////////////////////////////////
  ////////// READ - fnRead - LECTURA A BD ///////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  const [docsBD, setDocsBD] = useState([]);
  //console.log(docsBD);

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
      
    }
  }
  fnRead();
/*
  useEffect( () => {
    fnRead();
  }, []);
*/
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
      {
        docsBD.map((p) => <p key={p.id}> {p.nombre} </p> )
      }      
    </div>
  );
}

export default App;