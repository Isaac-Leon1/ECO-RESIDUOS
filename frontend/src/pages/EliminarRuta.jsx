import { useEffect, useState } from "react";
import BuscarRuta from "../components/BuscarRuta";
import RutaForm from "../components/RutaForm";
import RutasTable from "../components/RutasTable";
import axios from "axios";

export default function EliminarRuta() {
  const [rutas, setRutas] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const [rutaId, setRutaId] = useState('');
  const [form, setForm] = useState({
    search:''
  })
  
  const [alert, setAlert] = useState({
    message: "",
    exito:false,
  });

  const listarRutas = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/rutas`
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const respuesta = await axios.get(url,options)
      setRutas(respuesta.data)
    } catch (error) {
      setAlert({message:error.response.data.msg, exito:false});
    }
  }

  useEffect(()=>{
    listarRutas()
  },[])
  return (
    <>
    
      <div>
        <span className="mx-16">Busca la ruta que deseas eliminar</span>
        <BuscarRuta 
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        form={form}
        setForm={setForm}
        />
        <RutasTable setRutas={setRutas} rutas={rutas} alert={alert} setAlert={setAlert} type={'eliminar'} setRutaUpdate={setRutaId}/>
      </div>
    </>
  );
}
