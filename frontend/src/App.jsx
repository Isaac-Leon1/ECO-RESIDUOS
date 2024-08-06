import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import RegistroCiudadano from "./pages/RegistroCiudadano";
import IniciarSesion from "./pages/IniciarSesion";
import Auth from "./layouts/Auth";
import RecuperarContrasena from "./pages/RecuperarContrasena";
import Ciudadano from "./layouts/Ciudadano";
import ListarRutas from "./pages/ListarRutas";
import { AuthProvider } from "./context/AuthProvider";
import ReportesCiudadanos from "./pages/ReportesCiudadanos";
import DetalleRuta from "./pages/DetalleRuta";
import Inicio from "./pages/Inicio";
import RegistroAdministrador from "./pages/RegistroAdministrador";
import IniciarSesionAdministrador from "./pages/IniciarSesionAdministrador";
import RecuperarContrasenaAdministrador from "./pages/RecuperarContrasenaAdministrador";
import EmailConfirmado from "./pages/EmailConfirmado";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="registro"
              element={<RegistroCiudadano />}
            ></Route>
            <Route
              path="login"
              element={<IniciarSesion />}
            ></Route>
            <Route
              path="recuperarcontrasena"
              element={<RecuperarContrasena />}
            ></Route>
            

          </Route>
          <Route
            path="/"
            element={<Ciudadano />}
          >
            <Route
            path="/"
            element={<Inicio />}
            >
            </Route>
            <Route
            path="/listar-rutas"
            element={<ListarRutas />}
            >
            </Route>
            <Route
            path="/ruta/:id"
            element={<DetalleRuta />}
            ></Route>
            <Route
            path="/reportes-ciudadanos"
            element={<ReportesCiudadanos />}
            >
            </Route>
            {/* <Route
            path="/reportes"
            element={<Reportes />}
            >
            </Route> */}
            
        </Route>
        <Route path="administrador" element={<Auth></Auth>}>
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
        </Route>

       </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
