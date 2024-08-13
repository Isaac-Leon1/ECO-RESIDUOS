import { Link } from "react-router-dom";
import Alert from "./Alert";
import axios from "axios";

export default function RutasTable({
  setRutas,
  rutas,
  alert,
  type,
  setRutaUpdate,
  setAlert,
}) {
  const handleClick = async (id) => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/rutas/${id}`;
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const respuesta = await axios.get(url, options);
      setRutaUpdate(respuesta.data.msg);
    } catch (error) {
      setAlert({ message: error.response.data.msg, exito: false });
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      if (confirm("¿Estás seguro de eliminar esta ruta?")) {
        const url = `${import.meta.env.VITE_BACKEND_URL}/rutas/eliminar/${id}`;
        const options = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.delete(url, options);
        setRutas(
          rutas.filter((ruta) => {
            return ruta._id !== id;
          })
        );
        setAlert({ message: response.data.msg, exito: true });
        setTimeout(() => {
          setAlert({});
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
            {rutas.map((ruta) => (
              <tr
                className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
                key={ruta._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {ruta.nombre}
                </th>
                <td className="px-6 py-4">{ruta.empiezaEn}</td>
                <td className="px-6 py-4">{ruta.finalizaEn}</td>
                <td className="px-6 py-4">{ruta.dias.join(" - ")}</td>
                <td className="px-6 py-4">{ruta.horario}</td>
                <td className="px-6 py-4">{ruta.tipoResiduos}</td>
                <td className="px-6 py-4">
                  {type === "detalle" ? (
                    <Link
                      to={`/ruta/${ruta._id}`}
                      className="font-medium text-blue-600 hover:text-indigo-900 hover:underline"
                    >
                      Ver más
                    </Link>
                  ) : type === "actualizar" ? (
                    <button
                      onClick={() => handleClick(ruta._id)}
                      className="font-medium text-blue-600 hover:text-indigo-900 hover:underline"
                    >
                      Actualizar
                    </button>
                  ) : type === "eliminar" ? (
                    <button
                      onClick={() => handleDelete(ruta._id)}
                      className="font-medium text-red-600 hover:text-red-900 hover:underline"
                    >
                      Eliminar
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {alert.message && (
        <div className="absolute top-20">
          <Alert exito={alert.exito}>{alert.message}</Alert>
        </div>
      )}
    </>
  );
}
