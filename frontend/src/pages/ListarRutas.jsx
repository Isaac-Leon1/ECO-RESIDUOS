import { useEffect, useState } from "react";
import axios from "axios";
import RutasTable from "../components/RutasTable";

const ListarRutas = () => {
  const [rutas, setRutas] = useState([])
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
      <div className='flex justify-center flex-col'>
        <h1 className='text-center text-3xl font-bold text-[#06457C] m-5'>Listar Rutas</h1>
        <p className='mx-16 m font-semibold'>Aquí podrás visualizar una lista de todas las rutas</p>
      </div>
      <RutasTable 
      setRutas={setRutas}
      rutas={rutas}
      setAlert={setAlert}
      alert={alert}
      type={'detalle'}
      />
    </>
  );
};
export default ListarRutas;
