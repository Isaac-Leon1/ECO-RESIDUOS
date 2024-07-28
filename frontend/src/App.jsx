import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import RegistroCiudadano from "./pages/RegistroCiudadano";
import Auth from "./layouts/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="ciudadano"
            element={<Auth></Auth>}
          ><Route path="registro"
          element={<RegistroCiudadano></RegistroCiudadano>}></Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
