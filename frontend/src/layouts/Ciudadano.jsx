import { Navigate, Outlet } from "react-router-dom";

const Ciudadano = () => {
  return (
    <>
      <header className="bg-[#06457C] h-[77px] flex items-center">
        <nav className="flex justify-between w-full">
          <div className="flex items-center gap-10">
            <img src="/public/logo3.png" className="w-36 "></img>
            <ul className="flex gap-12 items-center text-white">
              <li>Inicio</li>
              <li>Listar rutas</li>
              <li>Reportes de ciudadanos</li>
            </ul>
          </div>
          <div className="flex gap-6 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M21 0C9.42072 0 0 9.42072 0 21C0 32.5793 9.42072 42 21 42C32.5793 42 42 32.5793 42 21C42 9.42072 32.5793 0 21 0ZM21.2019 9.69231C22.6396 9.69231 24.0451 10.1186 25.2405 10.9174C26.4359 11.7161 27.3676 12.8514 27.9178 14.1797C28.468 15.508 28.612 16.9696 28.3315 18.3797C28.051 19.7898 27.3587 21.085 26.342 22.1017C25.3254 23.1183 24.0302 23.8106 22.6201 24.0911C21.21 24.3716 19.7484 24.2276 18.4201 23.6774C17.0918 23.1272 15.9565 22.1955 15.1578 21.0001C14.359 19.8047 13.9327 18.3993 13.9327 16.9615C13.9327 15.0336 14.6986 13.1847 16.0618 11.8214C17.425 10.4582 19.274 9.69231 21.2019 9.69231ZM21 38.7692C18.5491 38.7702 16.1247 38.2629 13.8798 37.2794C11.6349 36.2958 9.61847 34.8573 7.95779 33.0548C8.85029 28.4328 16.8666 27.4615 21 27.4615C25.1334 27.4615 33.1497 28.4328 34.0422 33.0538C32.3817 34.8566 30.3653 36.2954 28.1204 37.2791C25.8755 38.2629 23.451 38.7703 21 38.7692Z"
                fill="white"
              />
            </svg>
            <button className="mr-8 bg-[#FF5630] rounded-xl p-1 text-[#ffffff]">Cerrar sesión</button>
          </div>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
};
export default Ciudadano;
