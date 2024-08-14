import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";
import ReportsContext from "../context/ReportsProvider";
import ReporteFrom from "../components/ReporteForm";

const ActualizarReporte = () => {
    const { id } = useParams();
    const { reports:reporte, alert, handleGetReport } = useContext(ReportsContext);
    useEffect(() => {
        const obtenerReporte = async () => {
            await handleGetReport(id);
        };
        obtenerReporte();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center m-6">Actualizar reporte</h1>
            {alert.message && <Alert exito={alert.exito}>{alert.message}</Alert>}
            {
               Object.values(reporte).length == 7 ? <ReporteFrom reporte={reporte} /> : <h2 className="text-center text-xl">No hay reporte</h2>
            }
        </div>
    );
}

export default ActualizarReporte;
    