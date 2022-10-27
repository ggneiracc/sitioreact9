//import firebase, { db } from './firebase';
//import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";


import { fnCrear, fnRead, fnUpdate, fnDelete } from './componente/api';
import { useEffect, useState } from "react";
import { async } from '@firebase/util';

function App() {
  const [nombre, setNombre] = useState(null);
  const [codigo, setCodigo] = useState(null);
  const [registro, setRegistro] = useState(null);

  const appCrear = async () => {
    await fnCrear(nombre);
    appRead();
    //console.log(nombrePersona);
  }

  const appRead = async () => {
    const p = await fnRead();
    setRegistro(p.docs);
    //console.log(p.docs[0].data());  
  }

  useEffect( () => {
    appRead();
  }, [])

  const appUpdate = async () =>{
    await fnUpdate(codigo, nombre);
    appRead();
  }

  const  appDelete = async () => {
    await fnDelete(codigo);
    appRead();
  }
 
  return (
    <div className="App">
      <input type="text" onChange={ e => setNombre(e.target.value)} placeholder="Nombres completos" /> 
      <input type="text" onChange={ e => setCodigo(e.target.value)} placeholder="Código de persona" /> 

      <button onClick={appCrear} >Guardar</button>
      <button onClick={appDelete}>Eliminar</button>
      <button onClick={appUpdate}>Actualizar</button>

      {
        registro && registro.map( p => <p>{p.id} - { p.data().name }</p>) 
      }
    </div>
  );
}

export default App;
