import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";

const ListarRutas = () => {
  const [rutas, setrutas] = useState([])
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
      setrutas(respuesta.data)
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                  Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                  Inicio
              </th>
              <th scope="col" className="px-6 py-3">
                  Finalización
              </th>
              <th scope="col" className="px-6 py-3">
                  Días
              </th>
              <th scope="col" className="px-6 py-3">
                  Horarios
              </th>
              <th scope="col" className="px-6 py-3">
                  Tipo de residuos
              </th>
              <th scope="col" className="px-6 py-3">
                  Detalles
              </th>
            </tr>
          </thead>
          <tbody>
          {
            alert.message ?
              <Alert exito={alert.exito}>{alert.message}</Alert>
            :
            rutas.map((ruta)=>(
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700" key={ruta._id}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {ruta.nombre}
              </th>
              <td className="px-6 py-4">
                {ruta.empiezaEn}
              </td>
              <td className="px-6 py-4">
                {ruta.finalizaEn}
              </td>
              <td className="px-6 py-4">
                {ruta.dias.join(' - ')}
              </td>
              <td className="px-6 py-4">
                {ruta.horario}
              </td>
              <td className="px-6 py-4">
                {ruta.tipoResiduos}
              </td>
              <td className="px-6 py-4">
                <Link to={`/ruta/${ruta._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver más</Link>
              </td>
            </tr>
            ))
          } 
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListarRutas;
