import { useState } from "react";
import Alert from "../components/Alert";
import axios from "axios";

const RegistroCiudadano = () => {
  const [alert, setAlert] = useState({
    menssage: "",
    exito:false,
  });
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ciudadano/register`, form);
      console.log(response);
    }catch(error){
      console.error(error);
    }
;
  }

  return (
    <>
      <div className="w-[60%] min-h-screen bg-[url('/public/fondoRegistro.png')] bg-no-repeat bg-cover bg-center"></div>
      <div className="min-h-screen w-[40%] flex justify-center">
        <form className="flex flex-col gap-4 justify-center  min-h-screen w-3/5" onSubmit={handleSubmit}>
          <h1 className="text-[#06457C] text-[40px] font-bold text-center">Registrate</h1>
          <div className="relative">
            <svg
              className="absolute inset-y-0 left-5 h-full "
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M10.2634 1.09084C9.56172 0.387386 8.5817 0 7.5 0C6.41253 0 5.42926 0.385042 4.73085 1.08415C4.02486 1.79095 3.68087 2.75155 3.76164 3.78882C3.92173 5.83523 5.59873 7.49996 7.5 7.49996C9.40127 7.49996 11.0754 5.83557 11.238 3.78949C11.3198 2.76159 10.9737 1.803 10.2634 1.09084ZM13.846 14.9999H1.15402C0.987895 15.0019 0.823376 14.9695 0.672434 14.905C0.521493 14.8406 0.387925 14.7457 0.281448 14.6273C0.0470799 14.3671 -0.0473886 14.0119 0.0225614 13.6526C0.32688 12.085 1.27661 10.7681 2.76936 9.84369C4.09553 9.02305 5.77541 8.57138 7.5 8.57138C9.22459 8.57138 10.9045 9.02339 12.2306 9.84369C13.7234 10.7678 14.6731 12.0846 14.9774 13.6523C15.0474 14.0115 14.9529 14.3668 14.7186 14.6269C14.6121 14.7454 14.4786 14.8404 14.3276 14.9049C14.1767 14.9694 14.0121 15.0019 13.846 14.9999Z"
                fill="#4B5563"
              />
            </svg>
            <input
              className="border-2 border-[#4B5563] rounded-lg p-3 pl-12 w-full"
              type="text"
              placeholder="Escribe tu nombre" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}
            />
          </div>

          <div className="relative">
            <svg
              className="absolute inset-y-0 left-5 h-full "
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M10.2634 1.09084C9.56172 0.387386 8.5817 0 7.5 0C6.41253 0 5.42926 0.385042 4.73085 1.08415C4.02486 1.79095 3.68087 2.75155 3.76164 3.78882C3.92173 5.83523 5.59873 7.49996 7.5 7.49996C9.40127 7.49996 11.0754 5.83557 11.238 3.78949C11.3198 2.76159 10.9737 1.803 10.2634 1.09084ZM13.846 14.9999H1.15402C0.987895 15.0019 0.823376 14.9695 0.672434 14.905C0.521493 14.8406 0.387925 14.7457 0.281448 14.6273C0.0470799 14.3671 -0.0473886 14.0119 0.0225614 13.6526C0.32688 12.085 1.27661 10.7681 2.76936 9.84369C4.09553 9.02305 5.77541 8.57138 7.5 8.57138C9.22459 8.57138 10.9045 9.02339 12.2306 9.84369C13.7234 10.7678 14.6731 12.0846 14.9774 13.6523C15.0474 14.0115 14.9529 14.3668 14.7186 14.6269C14.6121 14.7454 14.4786 14.8404 14.3276 14.9049C14.1767 14.9694 14.0121 15.0019 13.846 14.9999Z"
                fill="#4B5563"
              />
            </svg>
            <input
              className="border-2 border-[#4B5563] rounded-lg p-3 pl-12 w-full"
              type="text"
              placeholder="Escribe tu apellido" id="apellido" name="apellido" value={form.apellido} onChange={handleChange}
            />
          </div>

          <div className="relative">
            <svg
              className="absolute inset-y-0 left-5 h-full "
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
            >
              <path
                d="M16.625 0H2.375C1.74532 0.000676801 1.14162 0.252314 0.696365 0.699697C0.251112 1.14708 0.000673578 1.75367 0 2.38636V12.6136C0.000673578 13.2463 0.251112 13.8529 0.696365 14.3003C1.14162 14.7477 1.74532 14.9993 2.375 15H16.625C17.2547 14.9993 17.8584 14.7477 18.3036 14.3003C18.7489 13.8529 18.9993 13.2463 19 12.6136V2.38636C18.9993 1.75367 18.7489 1.14708 18.3036 0.699697C17.8584 0.252314 17.2547 0.000676801 16.625 0ZM16.0236 3.9473L9.91647 8.72003C9.79738 8.81305 9.65084 8.86355 9.5 8.86355C9.34916 8.86355 9.20262 8.81305 9.08353 8.72003L2.97638 3.9473C2.90463 3.89286 2.84436 3.82462 2.79908 3.74657C2.7538 3.66852 2.72441 3.5822 2.71261 3.49264C2.70082 3.40308 2.70685 3.31205 2.73037 3.22485C2.75389 3.13765 2.79443 3.05602 2.84962 2.98469C2.90481 2.91337 2.97356 2.85378 3.05187 2.80938C3.13018 2.76499 3.21649 2.73667 3.30578 2.72608C3.39508 2.71549 3.48558 2.72284 3.57202 2.7477C3.65846 2.77256 3.73913 2.81443 3.80933 2.87088L9.5 7.31804L15.1907 2.87088C15.333 2.76291 15.5118 2.71555 15.6886 2.73905C15.8654 2.76256 16.0259 2.85503 16.1353 2.99647C16.2448 3.13792 16.2944 3.31697 16.2735 3.4949C16.2526 3.67283 16.1628 3.83535 16.0236 3.9473Z"
                fill="#4B5563"
              />
            </svg>
            <input
              className="border-2 border-[#4B5563] rounded-lg p-3 pl-12 w-full"
              type="email"
              placeholder="Escribe tu correo electrónico" id="email" name="email" value={form.email} onChange={handleChange}
            />
          </div>

          <div className="relative">
            <svg
              className="absolute inset-y-0 left-5 h-full "
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M13.5227 5.5H10.8182V3C10.8182 2.20435 10.4159 1.44129 9.69986 0.87868C8.98381 0.31607 8.01264 0 7 0C5.98736 0 5.01619 0.31607 4.30014 0.87868C3.58409 1.44129 3.18182 2.20435 3.18182 3V5.5H0.477273C0.350692 5.5 0.229296 5.53951 0.13979 5.60984C0.0502839 5.68016 0 5.77554 0 5.875V14.625C0 14.7245 0.0502839 14.8198 0.13979 14.8902C0.229296 14.9605 0.350692 15 0.477273 15H13.5227C13.6493 15 13.7707 14.9605 13.8602 14.8902C13.9497 14.8198 14 14.7245 14 14.625V5.875C14 5.77554 13.9497 5.68016 13.8602 5.60984C13.7707 5.53951 13.6493 5.5 13.5227 5.5ZM9.30682 5.5H4.69318V2.97656C4.69318 2.49586 4.93622 2.03484 5.36883 1.69493C5.80145 1.35502 6.38819 1.16406 7 1.16406C7.61181 1.16406 8.19855 1.35502 8.63117 1.69493C9.06378 2.03484 9.30682 2.49586 9.30682 2.97656V5.5Z"
                fill="#4B5563"
              />
            </svg>
            <input
              className="border-2 border-[#4B5563] rounded-lg p-3 pl-12 w-full"
              type="password"
              placeholder="Escribe tu contraseña" id="password" name="password" value={form.password} onChange={handleChange}
            />
          </div>

          <div className="relative">
            <svg
              className="absolute inset-y-0 left-5 h-full "
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M14.9649 11.3217C14.7901 11.1355 14.173 10.585 13.0386 9.85678C11.8958 9.12217 11.0531 8.66412 10.8113 8.55731C10.79 8.54786 10.7665 8.5444 10.7434 8.54729C10.7203 8.55018 10.6984 8.55932 10.6801 8.57372C10.2906 8.87741 9.63505 9.43523 9.59989 9.46537C9.37288 9.6599 9.37288 9.6599 9.18705 9.5993C8.86025 9.49215 7.84505 8.95308 6.96043 8.06646C6.07581 7.17983 5.50894 6.13952 5.40179 5.81306C5.34052 5.6269 5.34052 5.6269 5.53572 5.39989C5.56586 5.36473 6.12402 4.70914 6.42771 4.32007C6.44212 4.30174 6.45125 4.27984 6.45414 4.25672C6.45703 4.23359 6.45357 4.21012 6.44412 4.18881C6.33731 3.94673 5.87926 3.10431 5.14464 1.96154C4.41538 0.827478 3.86559 0.210391 3.67942 0.0356104C3.66234 0.0194895 3.64123 0.00827485 3.6183 0.00314821C3.59538 -0.00197843 3.5715 -0.000827203 3.54918 0.00648047C2.89842 0.230107 2.27055 0.515451 1.67413 0.858617C1.09836 1.19332 0.553261 1.57819 0.0451769 2.00875C0.0274409 2.02383 0.0141437 2.04345 0.00671144 2.06551C-0.00072084 2.08757 -0.00200786 2.11124 0.00298831 2.13398C0.0729678 2.4601 0.407463 3.82151 1.44544 5.70726C2.50451 7.63185 3.23845 8.61792 4.79374 10.1678C6.34903 11.7178 7.36624 12.4959 9.29285 13.555C11.1786 14.5929 12.5407 14.9277 12.8662 14.9971C12.889 15.002 12.9127 15.0007 12.9348 14.9933C12.9569 14.9858 12.9765 14.9726 12.9917 14.9549C13.4222 14.4468 13.807 13.9017 14.1415 13.3259C14.4846 12.7295 14.77 12.1016 14.9937 11.4509C15.0008 11.4287 15.0019 11.4051 14.9969 11.3824C14.9918 11.3596 14.9808 11.3387 14.9649 11.3217Z"
                fill="#4B5563"
              />
            </svg>
            <input
              className="border-2 border-[#4B5563] rounded-lg p-3 pl-12 w-full"
              type="tel"
              placeholder="Escribe tu número de telefóno" id="telefono" name="telefono" value={form.telefono} onChange={handleChange}
            />
          </div>
          <button className="bg-[#06457C] text-white rounded-lg p-3 mt-12">Registrarse
          </button>
          <p className="text-[14px] text-center">¿Ya tienes cuenta? <a href="/ciudadano/iniciarSesion" className="text-[#0464B8]"> Inicia Sesión</a></p>
        </form>
      </div>
    </>
  );
};
export default RegistroCiudadano;
