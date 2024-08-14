import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReportsContext from "../context/ReportsProvider";
import { format } from "date-fns";

export default function ReporteForm({reporte}) {
    const navigate = useNavigate();
    const { handleUpdateReport, handleGetReport } = useContext(ReportsContext);
    const [form, setForm] = useState({
        fecha: reporte?.fecha || "",
        hora: reporte?.hora || "",
        lugar: reporte?.lugar || "",
        descripcion: reporte?.descripcion || ""
    });
    
    function tiempoFormatoISO(fecha, hora) {
        const fechaObj = new Date(fecha);
        const [hours, minutes] = hora.split(':').map(Number);
        fechaObj.setUTCHours(hours, minutes);
        return fechaObj.toISOString();
    }

    const formatearHora = (hora) => {
        const tiempoISO = tiempoFormatoISO(form.fecha, hora);
        return format(new Date(tiempoISO), 'HH:mm');
    }

    // Convertir la fecha ISO 8601 a formato 'YYYY-MM-DD'
    const formatearFecha = (isoDate) => {
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        await handleUpdateReport(reporte._id, form);
        navigate("/reportes");
    };
    
    useEffect(() => {
        const obtenerReporte = async () => {
            await handleGetReport(reporte._id);
        };
        obtenerReporte();
    }, []);
    
    return (
        <div className="flex justify-center">
        <div className="w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="font-bold" htmlFor="descripcion">
                Descripcion
            </label>
            <input
                type="text"
                name="descripcion"
                id="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
            />
            <label className="font-bold" htmlFor="fecha">
                Fecha
            </label>
            <input
                type="date"
                id="fecha"
                name="fecha"
                value={formatearFecha(form.fecha)}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
            />
            <label className="font-bold" htmlFor="hora">
                Hora
            </label>
            <input
                type="time"
                id="hora"
                name="hora"
                value={formatearHora(form.hora)}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
            />
            <label className="font-bold" htmlFor="lugar">
                Lugar
            </label>
            <input
                type="text"
                name="lugar"
                id="lugar"
                value={form.lugar}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-10"
            >
                Actualizar reporte
            </button>
            </form>
        </div>
        </div>
    );
}