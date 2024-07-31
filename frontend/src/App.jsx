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

function App() {
  return (
    <>
      <BrowserRouter>
       <AuthProvider>
        <Routes>
          <Route path="ciudadano" element={<Auth></Auth>}>
            <Route
              path="registro"
              element={<RegistroCiudadano />}
            ></Route>
            <Route
              path="iniciarSesion"
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
        </Route>
        </Routes>

       </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
