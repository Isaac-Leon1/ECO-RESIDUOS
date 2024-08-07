import axios from "axios";
import { useState } from "react";
import Alert from "../components/Alert";

export default function RutaForm() {
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
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/rutas/registro`,
        form,
        options
      );
      setAlert({ message: response.data.msg, exito: true });
      setForm({
        nombre: "",
        empiezaEn: "",
        finalizaEn: "",
        dias: [],
        horario: "",
        tipoResiduos: "",
      })
      setTimeStart("");
      setTimeEnd("");
      setTimeout(() => {
        setAlert('')
      },2000)
    } catch (error) {
      setAlert({message: error.response.data.errors ? error.response.data.errors[0].msg : error.response.data.msg, exito:false})
      setTimeout(() => {
        setAlert('')
      },2000)
    }
  };

  return (
    <div>
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
              {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map(
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
          Registrar Ruta
        </button>
      </div>
      {alert.message && (
        <div className="absolute top-20">
          <Alert exito={alert.exito}>{alert.message}</Alert>
        </div>
      )}
    </div>
  );
}
