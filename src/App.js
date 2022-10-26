//import logo from './logo.svg';
//import './App.css';
import { borrarRegistro, GuardarRegistroPersona, reportePersonas, updatePerson } from './componente/api';

import { useEffect, useState } from "react";
import { async } from '@firebase/util';

function App() {
  const [nombrePersona, setNombrePersona] = useState(null);
  const [idPersona, setIdPersona] = useState(null);
  const [persona, setPersona] = useState(null);

  const GuardarPersona = async () => {
    await GuardarRegistroPersona(nombrePersona);
    listaPersonas();
    //console.log(nombrePersona);
  }

  const  removeRegistro = async () => {
    await borrarRegistro(idPersona);
    listaPersonas();
  }

  useEffect( () => {
    listaPersonas();
  }, [])

  const listaPersonas = async () => {
    const p = await reportePersonas();
    setPersona(p.docs);
    //console.log(p.docs[0].data());  
  }

  const updatePersonData = async () =>{
    await updatePerson(idPersona, nombrePersona);
    listaPersonas();
  }
 
  return (
    <div className="App">
      <input type="text" onChange={ e => setNombrePersona(e.target.value)} placeholder="Nombres completos" /> 
      <input type="text" onChange={ e => setIdPersona(e.target.value)} placeholder="Código de persona" /> 

      <button onClick={GuardarPersona}>Guardar</button>
      <button onClick={removeRegistro}>Eliminar</button>
      <button onClick={updatePersonData}>Update</button>

      {
        persona && persona.map( p => <p>{p.id} - { p.data().name }</p>) 
      }
    </div>
  );
}

export default App;
