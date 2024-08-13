import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const ReportesTable = () => {
    const [reportes, setReportes] = useState([]);
    const [alert, setAlert] = useState({});
    
    const formatearFecha = (fecha) => {
        return format(new Date(fecha), 'dd/MM/yyyy');
    }

    useEffect(() => {
        const obtenerReportes = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/administrador/reportes`;
            const token = localStorage.getItem('token');
            const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            };
            const response = await axios.get(url, options);
            setReportes(response.data);
        } catch (error) {
            console.log(error.response.data);
            setAlert({ message: error.response.data.msg, exito: false });
        }
        };
        obtenerReportes();
    }, []);
    
    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
        if (confirm('¿Estás seguro de eliminar este reporte?')) {
            const url = `${import.meta.env.VITE_BACKEND_URL}/administrador/reporte/${id}`;
            const options = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            };
            const response = await axios.delete(url, options);
            setReportes(
            reportes.filter((reporte) => {
                return reporte._id !== id;
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
                    {reporte.ciudadano.nombre} {reporte.ciudadano.apellido}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center space-x-4">
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