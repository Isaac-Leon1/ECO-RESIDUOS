import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import RegistroCiudadano from "./pages/RegistroCiudadano";
import IniciarSesion from "./pages/IniciarSesion";
import RecuperarContrasena from "./pages/RecuperarContrasena";
import ListarRutas from "./pages/ListarRutas";
import { AuthProvider } from "./context/AuthProvider";
import ReportesCiudadanos from "./pages/ReportesCiudadanos";
import DetalleRuta from "./pages/DetalleRuta";
import DetalleReporte from "./pages/DetalleReporte";
import Inicio from "./pages/Inicio";
import PrivateRouteWithRole from "./routes/PrivateRoutesWithRole";
import Header from "./layouts/Header";
import { GestionarRutas } from "./pages/GestionarRutas";
import RegistrarRuta from "./pages/RegistrarRuta";
import NuevaContrasena from "./pages/NuevaContrasena";
import ActualizarRuta from "./pages/ActualizarRuta";
import EliminarRuta from "./pages/EliminarRuta";
import EmailConfirmado from "./pages/EmailConfirmado";
import Perfil from "./pages/Perfil";
import PrivateRouteWithCRole from "./routes/PrivateRouteWithCRole";
import { Forbidden } from "./pages/Forbidden";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="registro" element={<RegistroCiudadano />} />
            <Route path="login" element={<IniciarSesion />} />
            <Route path="recuperarcontrasena" element={<RecuperarContrasena />} />
            <Route path="nueva-contrasena/:token" element={<NuevaContrasena />} />
            <Route path="confirmar/:token" element={<EmailConfirmado />} />
            <Route path="/" element={<Header />}>
              <Route index element={<Inicio />}></Route>
              <Route path="rutas" element={<ListarRutas />}></Route>
              <Route path="ruta/:id" element={<DetalleRuta />}></Route>
              <Route path="reporte/:id" element={<DetalleReporte />}></Route>
              <Route
                path="reportes-ciudadanos"
                element={<ReportesCiudadanos />}
              ></Route>
              <Route path="perfil" element={<PrivateRouteWithCRole><Perfil /></PrivateRouteWithCRole>}/>
              <Route
                path="gestionar-rutas"
                element={
                  <PrivateRouteWithRole>
                    <GestionarRutas />
                  </PrivateRouteWithRole>
                }
              >
                <Route index element={<div className="flex flex-col justify-center items-center"><span className="font-bold text-3xl">Selecciona una opción</span>
                  <span>Aquí podras tener el control sobre todas las rutas de recolección disponibles.</span>
                </div>} />
                <Route path="registrar" element={<RegistrarRuta/>} />
                <Route path="actualizar" element={<ActualizarRuta />} />
                <Route path="eliminar" element={<EliminarRuta />} />
              </Route>
              <Route path="*" element={<Forbidden />}/>
            </Route>
            
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
