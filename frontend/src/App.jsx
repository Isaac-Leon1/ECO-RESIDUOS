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
import Inicio from "./pages/Inicio";
import PrivateRouteWithRole from "./routes/PrivateRoutesWithRole";
import Header from "./layouts/Header";
import { GestionarRutas } from "./pages/GestionarRutas";
import RegistrarRuta from "./pages/RegistrarRuta";
import NuevaContrasena from "./pages/NuevaContrasena";
import ActualizarRuta from "./pages/ActualizarRuta";
import EliminarRuta from "./pages/EliminarRuta";
import Perfil from "./pages/Perfil";

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
            <Route path="/" element={<Header />}>
              <Route index element={<Inicio />}></Route>
              <Route path="rutas" element={<ListarRutas />}></Route>
              <Route path="ruta/:id" element={<DetalleRuta />}></Route>
              <Route
                path="reportes-ciudadanos"
                element={<ReportesCiudadanos />}
              ></Route>
              <Route path="perfil" element={<Perfil />}/>
              <Route
                path="gestionar-rutas"
                element={
                  <PrivateRouteWithRole>
                    <GestionarRutas />
                  </PrivateRouteWithRole>
                }
              >
                <Route path="registrar" element={<RegistrarRuta/>} />
                <Route path="actualizar" element={<ActualizarRuta />} />
                <Route path="eliminar" element={<EliminarRuta />} />
              </Route>
            </Route>
            {/* <Route path="administrador">
              <Route
                path="registro"
                element={<RegistroAdministrador />}
              ></Route>
              <Route
                path="iniciarSesion"
                element={<IniciarSesionAdministrador />}
              ></Route>
              <Route
                path="recuperarcontrasena"
                element={<RecuperarContrasenaAdministrador />}
              ></Route>
              <Route
                path="confirmar/:token"
                element={<EmailConfirmado />}
              ></Route>
            </Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
