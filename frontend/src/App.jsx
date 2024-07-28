import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import RegistroCiudadano from "./pages/RegistroCiudadano";
import IniciarSesion from "./pages/IniciarSesion";
import Auth from "./layouts/Auth";
import RecuperarContrasena from "./pages/RecuperarContrasena";
import Ciudadano from "./layouts/Ciudadano";
import ListarRutas from "./pages/ListarRutas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="ciudadano" element={<Auth></Auth>}>
            <Route
              path="registro"
              element={<RegistroCiudadano></RegistroCiudadano>}
            ></Route>
            <Route
              path="iniciarSesion"
              element={<IniciarSesion></IniciarSesion>}
            ></Route>
            <Route
              path="recuperarcontrasena"
              element={<RecuperarContrasena></RecuperarContrasena>}
            ></Route>
          </Route>
          <Route
            path="rutas"
            element={<Ciudadano></Ciudadano>}
          ><Route
          path="listar-rutas"
          element={<ListarRutas></ListarRutas>}
        ></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
