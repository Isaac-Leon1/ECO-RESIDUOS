import { useState } from "react";
import axios from "axios";

const ListarRutas = () => {

  return (
    <div>
      <nav>
      <img src="/public/logo.png" className="w-80 mx-auto pb-10"></img>
        <ul>
          <li>Inicio</li>
          <li>Listar rutas</li>
          <li>Reportes de ciudadanos</li>
        </ul>
        <h1 className="text-[#06457C]">Listar Rutas</h1>
      </nav>
    </div>
  );
};
export default ListarRutas;
