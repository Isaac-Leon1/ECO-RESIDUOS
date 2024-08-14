import { Link, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import ReportsContext from "../context/ReportsProvider";
import { format } from "date-fns";
import Alert from "../components/Alert";

const DetalleReporte = () => {
    const { id } = useParams();
    const { reports:reporte, alert, handleGetReport } = useContext(ReportsContext);
    
    const formatearFecha = (fecha) => {
        return format(new Date(fecha), 'dd/MM/yyyy');
    }

    useEffect(() => {
        const obtenerReporte = async () => {
            await handleGetReport(id);
        };
        obtenerReporte();
    }, [id]);

    return (
        <>
            <div className="flex justify-center flex-col">
                <Link
                    to={"/reportes-ciudadanos"}
                    className="flex gap-6 bg-[#67DCE3] hover:bg-[#a7fbff] text-black font-bold py-3 px-14 mx-16 rounded absolute"
                >
                    <svg
                        width="27"
                        height="24"
                        viewBox="0 0 27 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.6242 20.6247C23.496 20.6247 23.3695 20.5987 23.2543 20.5488C23.1391 20.4988 23.0382 20.4262 22.9593 20.3364C21.7538 18.9644 20.6353 17.9054 19.0928 17.1958C17.6653 16.5409 15.8723 16.1992 13.4992 16.1354V19.8747C13.4987 20.0211 13.45 20.1641 13.3592 20.2862C13.2683 20.4083 13.1392 20.5041 12.9878 20.5617C12.8364 20.6194 12.6694 20.6364 12.5073 20.6107C12.3451 20.585 12.195 20.5177 12.0754 20.417L2.79416 12.542C2.71168 12.472 2.64603 12.3878 2.60118 12.2946C2.55633 12.2014 2.5332 12.101 2.5332 11.9997C2.5332 11.8983 2.55633 11.7979 2.60118 11.7047C2.64603 11.6115 2.71168 11.5273 2.79416 11.4573L12.0754 3.58232C12.195 3.48167 12.3451 3.41434 12.5073 3.38862C12.6694 3.3629 12.8364 3.37992 12.9878 3.43758C13.1392 3.49524 13.2683 3.59102 13.3592 3.71312C13.45 3.83521 13.4987 3.97827 13.4992 4.12466V7.89154C17.409 8.05138 20.322 9.34044 22.1661 11.7292C23.6938 13.7078 24.468 16.4481 24.468 19.8747C24.468 20.0736 24.3791 20.2643 24.2209 20.405C24.0626 20.5456 23.848 20.6247 23.6242 20.6247Z"
                            fill="black"
                        />
                    </svg>
                    <span>Volver</span>
                </Link>
                <h1 className="text-center text-3xl font-bold text-[#06457C] m-5">
                    Detalle Reporte
                </h1>
                <p className="mx-16 mt-8 font-semibold">
                    Aquí podrás visualizar en detalle cada reporte
                </p>
            </div>
            <div>
                {Object.keys(reporte).length == 7 ? (
                    <>
                        <div className="m-5 flex justify-center">
                            <div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-md text-gray-00 mt-4">
                                        <span className="text-gray-600 font-bold">Reporte: </span>
                                        {reporte.descripcion}
                                    </p>
                                    <p className="text-md text-gray-00 mt-4">
                                        <span className="text-gray-600 font-bold">Fecha y hora del reporte: </span>
                                        {formatearFecha(reporte.fecha)} - {reporte.hora}
                                    </p>
                                    <p className="text-md text-gray-00 mt-4">
                                        <span className="text-gray-600 font-bold">Usuario que reportó: </span>
                                        {reporte.ciudadano?.nombre && reporte.ciudadano?.apellido ? (
                                            reporte.ciudadano?.nombre + " " + reporte.ciudadano?.apellido
                                        ) : "No disponible"}
                                    </p>
                                    <p className="text-md text-gray-00 mt-4">
                                        <span className="text-gray-600 font-bold">Contacto del usuario: </span>
                                        {reporte.ciudadano?.email && reporte.ciudadano?.telefono ? (
                                            reporte.ciudadano?.email + " - " + reporte.ciudadano?.telefono
                                        ) : "No disponible"}8
                                    </p>
                                    <p className="text-md text-gray-00 mt-4">
                                        <span className="text-gray-600 font-bold">Dirección: </span>
                                        {reporte.lugar}
                                    </p>
                                    <p className="text-md text-gray-00 mt-4">
                                        <span className="text-gray-600 uppercase font-bold">Estado: </span>
                                        <span className="bg-green-500 text-slate-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                                            {reporte.estado && "activo"}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="m-5">
                        <Alert exito={alert.exito}>{alert.message}</Alert>
                    </div>
                )}
            </div>
        </>
    );
};

export default DetalleReporte;