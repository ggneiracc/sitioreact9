import { collection, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
//import { getDocs, query, setDoc, where, deleteDoc } from "firebase/firestore";
import React, {useEffect, useState} from 'react'
import {db} from "./firebase";

const AppForm = (props) => {
    ///////////////////////////////////////////////////////////////////////
    ////////// CREAR - fnCrear - Guardar //////////////////////////////////
    ////////// UPDATE - fnUpdate - Actualizar /////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    const camposRegistro = {nombre:"", edad:"", genero:""}; //Estructura tbl
    const [objeto, setObjeto] = useState(camposRegistro);   //tabla o objeto

    const handleStatusChange = (e) => {           //Maneja cambios en input
        const {name, value} = e.target;           //Capta lo que se escribe
        setObjeto({...objeto, [name]:value });    //asigna al obj name y value
       //console.log(objeto);                     //ver en TIEMPO REAL
    };
 
    const handleSubmit = async (e) => {           //maneja submit (envio)
        e.preventDefault();                       //evitar por defecto (false)

        try {
            ////////// REGISTRAR o ACTUALIZA ////////////////////////////////
            if(props.idActual === ""){
                //console.log(props.idActual);        //Verificar idActual
                if(validarForm()){                    //Validar
                    addDoc(collection(db, 'persona'), objeto);
                    //console.log('Se guardó...');      //Msj
                    console.log("Se guardo registro en BD...");
                }else{
                    console.log("NO se guardo...");
                }
            }else{
                ////////// ACTUALIZAR //////////////////////////////////////////
                await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
                console.log("Se actualizo con éxito...");
                props.setIdActual("");                //Limpiar pedido
            }
            setObjeto(camposRegistro);                //limpiar objeto
            
        } catch (error) {
            console.error();
        } 
    };
    
    const validarForm = () => {
         if(objeto.nombre === "" || /^\s+$/.test(objeto.nombre)){
            alert("Escriba nombre...");
            return false;
         }
         return true;
    };


    ///////////////////////////////////////////////////////////////////////
    ////////// OBTENER registro por idActual //////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    useEffect(() => {
        if(props.idActual === ""){               //Si no hay q' id Update
            setObjeto(camposRegistro);
        }else{
            obtenerDatosPorId(props.idActual);    //Obtiene REGISTRO de BD
        }
    }, [props.idActual]);

    const obtenerDatosPorId = async (xId) => {
        //console.log("xId ", xId);               //Id a actualizar    
        const objPorId = doc(db, "persona", xId); //Obtiene por tabla
        const docPorId = await getDoc(objPorId);  //fn para obtener
        if(docPorId.exists()){
            //console.log("Datos de doc... ", docPorId.data());
            setObjeto(docPorId.data());          //Pasando datos a variable
        }else{
            console.log("No hay datos...")
        }
    };

    return (
        <div style={{background:"orange", padding:"10px", margin:"10px"}}>
            <h3>CREAR / UPDATE</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='nombre' placeholder='Nombres...' 
                    onChange={handleStatusChange} value={objeto.nombre} /> <br/>

                <input type="text" name='edad' placeholder='Edad...' 
                    onChange={handleStatusChange} value={objeto.edad} /><br/>

                <input type="text" name='genero' placeholder='Genero...' 
                    onChange={handleStatusChange} value={objeto.genero} /><br/>
                
                <button>
                    {props.idActual === "" ? "Guardar" : "Actualizar" }
                </button>
            </form>
            
        </div>
    )
}

export default AppForm
