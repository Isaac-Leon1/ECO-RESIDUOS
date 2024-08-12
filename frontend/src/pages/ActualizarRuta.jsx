import { useEffect, useState } from "react";
import BuscarRuta from "../components/BuscarRuta";
import RutaForm from "../components/RutaForm";
import RutasTable from "../components/RutasTable";
import axios from "axios";

export default function ActualizarRuta() {
  const [rutas, setRutas] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const [rutaUpdate, setRutaUpdate] = useState({});
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
        <span className="mx-16">Busca la ruta que deseas actualizar</span>
        <BuscarRuta 
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        form={form}
        setForm={setForm}
        setRutas={setRutas}
        />
        {Object.keys(rutaUpdate).length > 0 ? (
          <RutaForm type={'actualizar'} rutaUpdate={rutaUpdate} setRutaUpdate={setRutaUpdate}/>
        ):
        (
          <RutasTable rutas={rutas} alert={alert} type={'actualizar'} setRutaUpdate={setRutaUpdate}/>
        )}
      </div>
    </>
  );
}
