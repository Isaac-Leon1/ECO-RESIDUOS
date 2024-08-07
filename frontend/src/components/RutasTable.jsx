import { Link } from "react-router-dom";
import Alert from "./Alert";

export default function RutasTable({rutas, alert, type, setRutaUpdate}) {
  const handleDelete = () => {
    //Delete
  }
  return (
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
          {alert.message ? (
            <Alert exito={alert.exito}>{alert.message}</Alert>
          ) : (
            rutas.map((ruta) => (
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
                  {
                    type === 'detalle' ? (
                    <Link
                      to={`/ruta/${ruta._id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Ver más
                    </Link>
                    ) :
                    type === 'actualizar' ? (
                      <button
                      onClick={(() => setRutaUpdate(ruta._id))}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Actualizar
                    </button>
                    ) :
                    type === 'eliminar' ?
                    <button
                      onClick={(handleDelete)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                    : ''
                  }
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
