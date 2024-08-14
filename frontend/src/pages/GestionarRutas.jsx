import { Link, Outlet } from "react-router-dom";

export const GestionarRutas = () => {
  return (
    <>
      <div className="flex justify-center flex-col">
        <h1 className="text-center text-3xl font-bold text-[#06457C] m-5">
          Gestión de Rutas
        </h1>
        <p className="mx-16 m font-semibold">
          Aquí podrás gestionar las rutas de recolección.
        </p>
      </div>
      <div className="flex flex-row mx-16 gap-5">
        <Link to={'registrar'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Registrar Ruta
        </Link>
        <Link to={'actualizar'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Actualizar Ruta
        </Link>
        <Link to={'eliminar'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Eliminar Ruta
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
