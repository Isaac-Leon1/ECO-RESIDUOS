import axios from 'axios';
import {useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import ReportsContext from '../context/ReportsProvider';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const ReportesTable = ({reportes}) => {
    const {auth} = useContext(AuthContext);
    console.log(auth);
    const {handleDeleteReport, alert} = useContext(ReportsContext);
    
    const formatearFecha = (fecha) => {
        return format(new Date(fecha), 'dd/MM/yyyy');
    }
    
    const handleDelete = async (id) => {
        if (confirm('¿Estás seguro de eliminar este reporte?')) {
            await handleDeleteReport(id);
        }
        
    };
    
    return (
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                <th scope="col" className="px-6 py-3">
                    Reporte
                </th>
                <th scope="col" className="px-6 py-3">
                    Dirección
                </th>
                <th scope="col" className="px-6 py-3">
                    Fecha y hora
                </th>
                <th scope="col" className="px-6 py-3">
                    Quien reporta
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Acciones
                </th>
                </tr>
            </thead>
            <tbody>
                {reportes.map((reporte) => (
                <tr key = {reporte._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {reporte.descripcion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {reporte.lugar}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {formatearFecha(reporte.fecha)} - {reporte.hora}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    {reporte.ciudadano?.nombre || "No disponible"} {reporte.ciudadano?.apellido || ""}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center space-x-4">
                        {
                            
                            auth?.rol === "administrador" ? (
                                <>
                                <Link
                                    to={`/reporte/${reporte._id}`}
                                    className="font-medium text-indigo-600 hover:text-indigo-900 hover:underline"
                                >
                                    Ver más
                                </Link>
        
                                <button
                                    onClick={() => handleDelete(reporte._id)}
                                    className="font-medium text-red-600 hover:text-red-900 hover:underline"
                                >
                                    Eliminar
                                </button>
                                </>
                            ) : (
                                <Link
                                    to={`/actualizar-reporte/${reporte._id}`}
                                    className="font-medium text-indigo-600 hover:text-indigo-900 hover:underline"
                                >
                                    Actualizar
                                </Link>
                            )
                        }
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        {alert.message && (
            <div className="fixed top-0 right-0 m-6">
            <div
                className={`${
                alert.exito ? 'bg-green-500' : 'bg-red-500'
                } text-white font-bold rounded-lg border shadow-lg p-4`}
            >
                {alert.message}
            </div>
            </div>
        )}
    </>
    );
};

export default ReportesTable;