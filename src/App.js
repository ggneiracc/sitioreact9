//import logo from './logo.svg';
//import './App.css';
import { GuardarRegistroPersona } from './componente/api';

import { useState } from "react";

function App() {
  const [nombrePersona, setNombrePersona] = useState(null);

  const GuardarPersona = () => {
    GuardarRegistroPersona(nombrePersona);
    console.log(nombrePersona);
  }

  return (
    <div className="App">
      <input type="text" onChange={ e => setNombrePersona(e.target.value)} /> 
      <button onClick={GuardarPersona}>Guardar</button>
    </div>
  );
}

export default App;
