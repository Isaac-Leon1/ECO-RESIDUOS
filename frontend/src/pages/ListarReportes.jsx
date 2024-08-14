import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import ReportsContext from "../context/ReportsProvider";
import { useEffect } from "react";
import ReportesTable from "../components/ReportesTable";
import Alert from "../components/Alert";


export default function ListarReportes() {
    const { auth } = useContext(AuthContext);
    const { reports, alert, handleGetReportsByCitizen } = useContext(ReportsContext);
    console.log("longitud reportes ->||", reports.length);
    useEffect(() => {
        const obtenerReportesCiudadano = async () => {
            await handleGetReportsByCitizen(auth.id);
        }
        if (auth?.id){
            obtenerReportesCiudadano()
        };
    }, [auth]);

    return (
        <div className="flex justify-center flex-col">
            <h1 className="text-3xl font-bold text-center m-6">Listado de reportes</h1>
            {alert.message && <Alert exito={alert.exito}>{alert.message}</Alert>}
            {
                reports.length > 0 ? <ReportesTable reportes={reports} /> : <h2 className="text-center text-xl">No hay reportes</h2>
            }
        </div>
    ) 
                    
}