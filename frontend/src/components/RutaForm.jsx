import axios from "axios";
import { useEffect, useState } from "react";
import Alert from "./Alert";

export default function RutaForm({ type, setRutaUpdate, rutaUpdate = {} }) {
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [alert, setAlert] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    empiezaEn: "",
    finalizaEn: "",
    dias: [],
    horario: "",
    tipoResiduos: "",
  });
  useEffect(() => {
    if (Object.keys(rutaUpdate).length > 0) {
      const schedule = rutaUpdate.horario.split(" - ");
      setTimeStart(schedule[0]);
      setTimeEnd(schedule[1]);
      setForm({
        nombre: rutaUpdate.nombre,
        empiezaEn: rutaUpdate.empiezaEn,
        finalizaEn: rutaUpdate.finalizaEn,
        dias: rutaUpdate.dias,
        horario: rutaUpdate.horario,
        tipoResiduos: rutaUpdate.tipoResiduos,
      });
    }
  }, [rutaUpdate]);

  // Handle change for text inputs
  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle change for time inputs
  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    if (name === "horaInicio") {
      setTimeStart(value);
    } else if (name === "horaFin") {
      setTimeEnd(value);
    }

    setForm((prevForm) => ({
      ...prevForm,
      horario: timeStart && timeEnd ? `${timeStart} - ${timeEnd}` : "",
    }));
  };

  // Handle change for checkboxes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let newTipoResiduos = form.tipoResiduos;

    if (name === "tipoResiduosO") {
      if (checked) {
        if (!form.tipoResiduos.includes("Orgánico")) {
          newTipoResiduos = form.tipoResiduos.includes("Inorgánico")
            ? "Orgánico e Inorgánico"
            : "Orgánico";
        }
      } else {
        newTipoResiduos = form.tipoResiduos.includes("Inorgánico")
          ? "Inorgánico"
          : "";
      }
    } else if (name === "tipoResiduosI") {
      if (checked) {
        if (!form.tipoResiduos.includes("Inorgánico")) {
          newTipoResiduos = form.tipoResiduos.includes("Orgánico")
            ? "Orgánico e Inorgánico"
            : "Inorgánico";
        }
      } else {
        newTipoResiduos = form.tipoResiduos.includes("Orgánico")
          ? "Orgánico"
          : "";
      }
    } else if (name.startsWith("dia")) {
      const day = name.split("-")[1];
      setForm((prevForm) => ({
        ...prevForm,
        dias: checked
          ? [...prevForm.dias, day]
          : prevForm.dias.filter((d) => d !== day),
      }));
    }
    setForm((prevForm) => ({
      ...prevForm,
      tipoResiduos: newTipoResiduos,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let response = [];
      if (type === "actualizar") {
        response = await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/rutas/actualizar/${
            rutaUpdate._id
          }`,
          form,
          options
        );
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/rutas/registro`,
          form,
          options
        );

        setForm({
          nombre: "",
          empiezaEn: "",
          finalizaEn: "",
          dias: [],
          horario: "",
          tipoResiduos: "",
        });
        setTimeStart("");
        setTimeEnd("");
      }

      setAlert({ message: response.data.msg, exito: true });
      setTimeout(() => {
        setAlert("");
      }, 2000);
    } catch (error) {
      
      setAlert({
        message: error.response.data.errors
          ? error.response.data.errors[0].msg
          : error.response.data.msg,
        exito: false,
      });
      setTimeout(() => {
        setAlert("");
      }, 2000);
    }
  };

  return (
    <div>
      {type == "actualizar" ? (
        <button
          onClick={() => setRutaUpdate({})}
          className="flex gap-6 bg-[#67DCE3] hover:bg-[#a7fbff] text-black font-bold py-3 px-14 mx-16 rounded absolute"
        >
          <svg
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6242 20.6247C23.496 20.6247 23.3695 20.5987 23.2543 20.5488C23.1391 20.4988 23.0382 20.4262 22.9593 20.3364C21.7538 18.9644 20.6353 17.9054 19.0928 17.1958C17.6653 16.5409 15.8723 16.1992 13.4992 16.1354V19.8747C13.4987 20.0211 13.45 20.1641 13.3592 20.2862C13.2683 20.4083 13.1392 20.5041 12.9878 20.5617C12.8364 20.6194 12.6694 20.6364 12.5073 20.6107C12.3451 20.585 12.195 20.5177 12.0754 20.417L2.79416 12.542C2.71168 12.472 2.64603 12.3878 2.60118 12.2946C2.55633 12.2014 2.5332 12.101 2.5332 11.9997C2.5332 11.8983 2.55633 11.7979 2.60118 11.7047C2.64603 11.6115 2.71168 11.5273 2.79416 11.4573L12.0754 3.58232C12.195 3.48167 12.3451 3.41434 12.5073 3.38862C12.6694 3.3629 12.8364 3.37992 12.9878 3.43758C13.1392 3.49524 13.2683 3.59102 13.3592 3.71312C13.45 3.83521 13.4987 3.97827 13.4992 4.12466V7.89154C17.409 8.05138 20.322 9.34044 22.1661 11.7292C23.6938 13.7078 24.468 16.4481 24.468 19.8747C24.468 20.0736 24.3791 20.2643 24.2209 20.405C24.0626 20.5456 23.848 20.6247 23.6242 20.6247Z"
              fill="black"
            />
          </svg>
          <span>Volver</span>
        </button>
      ) : (
        ""
      )}
      <div className="flex justify-center gap-12 items-center">
        <form id="rutaForm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-black">
                Nombre de la ruta
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-black">
                Inicio de la Ruta
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="empiezaEn"
                  value={form.empiezaEn}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-black">
                Finalización de la Ruta
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="finalizaEn"
                  value={form.finalizaEn}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-black">
                Horario desde:
              </label>
              <div className="mt-2.5">
                <input
                  type="time"
                  name="horaInicio"
                  value={timeStart}
                  onChange={handleTimeChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-black">
                Horario hasta:
              </label>
              <div className="mt-2.5">
                <input
                  type="time"
                  name="horaFin"
                  value={timeEnd}
                  onChange={handleTimeChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </form>
        <div>
          <div>
            <h3 className="my-4 font-bold text-gray-900">Tipo de Residuos</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
              <li className="w-full rounded-t-lg">
                <div className="flex items-center ps-3">
                  <input
                    type="checkbox"
                    name="tipoResiduosO"
                    value="Orgánico"
                    onChange={handleCheckboxChange}
                    checked={form.tipoResiduos.includes("Orgánico")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="tipoResiduosO"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                  >
                    Orgánico
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    type="checkbox"
                    name="tipoResiduosI"
                    value="Inorgánico"
                    onChange={handleCheckboxChange}
                    checked={form.tipoResiduos.includes("Inorgánico")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="tipoResiduosI"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                  >
                    Inorgánico
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="my-4 font-bold text-gray-900">Días</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
              {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sábado"].map(
                (day) => (
                  <li key={day} className="w-full">
                    <div className="flex items-center ps-3">
                      <input
                        type="checkbox"
                        name={`dia-${day}`}
                        checked={form.dias.includes(day)}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500"
                      />
                      <label
                        htmlFor={`dia-${day}`}
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                      >
                        {day}
                      </label>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          form="rutaForm"
          type="submit"
          className="block mx-auto mb-10 w-96 rounded-md bg-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {type === "actualizar" ? "Actualizar" : "Registrar"} Ruta
        </button>
      </div>
      {alert.message && (
        <div className="absolute top-28">
          <Alert exito={alert.exito}>{alert.message}</Alert>
        </div>
      )}
    </div>
  );
}
