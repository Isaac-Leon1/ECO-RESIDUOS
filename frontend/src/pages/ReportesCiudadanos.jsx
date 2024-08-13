import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormularioReportes from "../components/FormularioReportes";
import AuthContext from "../context/AuthProvider";
import ReportesTable from "../components/ReportesTable";

const ReportesCiudadanos = () => {
  const {auth} = useContext(AuthContext)
  const [autenticado, setAutenticado] = useState(localStorage.getItem("token"));

  // useEffect(() => {
  //   setAutenticado(localStorage.getItem("token"));
  // }, []);

  if (!autenticado) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-gray-50 px-16 py-14 max-w-xl">
          <div className="flex justify-center">
            <div className="rounded-full bg-blue-200 p-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-300 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="350px"
                  viewBox="0 0 48 48"
                  version="1.1"
                >
                  <g
                    id="report"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      fillOpacity="0.01"
                    />
                    <g
                      id="编组"
                      transform="translate(3.754351, 2.827607)"
                      stroke="#000000"
                      strokeWidth="4"
                    >
                      <path
                        d="M32.2456488,32.1723935 L8.24564876,32.1723935 L8.24564876,18.1723935 C8.24564876,11.5449765 13.6182318,6.1723935 20.2456488,6.1723935 C26.8730658,6.1723935 32.2456488,11.5449765 32.2456488,18.1723935 L32.2456488,32.1723935 Z"
                        id="形状结合"
                        fill="#2F88FF"
                        fillRule="nonzero"
                      ></path>
                      <path
                        d="M4.24564876,39.1723935 L36.2456488,39.1723935"
                        id="路径-7"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M1,9.08742569 L2.51206274,11.8647745"
                        id="路径-8"
                        strokeLinecap="round"
                        transform="translate(2.000000, 10.587426) rotate(-43.000000) translate(-2.000000, -10.587426) "
                      ></path>
                      <path
                        d="M10.3594726,1 L9.0448312,3.87605946"
                        id="路径-8"
                        strokeLinecap="round"
                        transform="translate(10.021384, 2.500000) rotate(-43.000000) translate(-10.021384, -2.500000) "
                      ></path>
                      <path
                        d="M2.78432782,5.80894292 L7.02438401,5.6608769"
                        id="路径-8"
                        strokeLinecap="round"
                        transform="translate(4.681446, 6.068090) scale(-1, 1) rotate(-43.000000) translate(-4.681446, -6.068090) "
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">
            ¿Deseas reportar algún problema?
          </h3>
          <p className="w-full text-center font-normal text-gray-600">
            Puedes publicar reportes sobre inconvenientes en una ruta en
            específico o ayudarnos con sugerencias
          </p>
          <Link
            to="/login"
            className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-[#06457C] px-6 py-3 text-center text-base font-medium text-slate-50 outline-8 hover:outline hover:duration-300"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-center text-3xl font-bold text-[#06457C] m-5">
        Reportar Rutas
      </h1>
      <p className="mx-16 m font-semibold text-center">
        {auth.rol === 'administrador' ? <>Ver todos los incidenter registrados</> : <>Reportar cualquier incidente ocurrido en una ruta</>}
      </p>
      {auth.rol === 'administrador' ? <ReportesTable/> : <FormularioReportes />}
    </div>
  );
};

export default ReportesCiudadanos;
