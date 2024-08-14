import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import Alert from "../components/Alert";

export default function Perfil() {
  const { auth, setAuth } = useContext(AuthContext);
  console.log(auth)
  const [onEdit, setOnEdit] = useState(false);
  const [alert, setAlert] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/actualizar-perfil/${auth.id}`,
        form,
        options
      );

      auth["nombre"] = form.nombre;
      auth["apellido"] = form.apellido;
      auth["telefono"] = form.telefono;
      setOnEdit(false);
      setAlert({ message: response.data.msg, exito: true });
      setTimeout(() => {
        setAlert("");
      }, 2000);
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    if (auth) {
      setForm({
        nombre: auth.nombre || "",
        apellido: auth.apellido || "",
        telefono: auth.telefono || "",
        email: auth.email || "",
      });
    }
  }, [auth]);

  return (
    <>
      <section className="py-10 my-auto">
        <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center">
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2">
              Perfil
            </h1>
            <h2 className="text-grey text-sm mb-4">Detalles de tu perfil</h2>
            <form onSubmit={handleSubmit}>
              <div className="w-full py-4 rounded-sm bg-[url('../src/assets/bg-garbage.jpg')] bg-cover bg-bottom bg-no-repeat items-center">
                <div className="mx-auto flex justify-center w-[141px] h-[141px] border-4 border-slate-700 bg-blue-300/20 rounded-full bg-[url('../src/assets/profile.jpg')] bg-cover bg-center bg-no-repeat"></div>
              </div>
              <div className="aspect-[28/1]">
                <h2
                  className={`text-grey text-center text-sm pt-2  ${
                    onEdit ? "" : "hidden"
                  }`}
                >
                  Ahora puedes editar tu perfil!
                </h2>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4 mt-6">
                  <label htmlFor="nombre" className="mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg"
                    placeholder="Nombre"
                    required
                    disabled={!onEdit}
                  />
                </div>
                <div className="w-full mb-4 lg:mt-6">
                  <label htmlFor="apellido" className="">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg"
                    placeholder="Apellido"
                    required
                    disabled={!onEdit}
                  />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full mb-4 mt-6">
                  <label htmlFor="direccion" className="mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 p-4 w-full border-2 rounded-lg"
                    placeholder="Dirección"
                    required
                    disabled={!onEdit}
                  />
                </div>
                <div className="w-full mb-4 mt-6">
                  <label htmlFor="telefono" className="">
                    Número de Teléfono
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 19 18"
                      >
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      aria-describedby="helper-text-explanation"
                      className="mt-2 p-4 w-full border-2 rounded-lg block ps-10"
                      pattern="[9]{1}[0-9]{1}[0-9]{3}[0-9]{4}"
                      placeholder="099-999-9999"
                      required
                      disabled={!onEdit}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full rounded-lg bg-blue-500 hover:bg-blue-400 mt-4 text-white text-lg font-semibold">
                  <button
                  type="button" 
                  className="w-full p-4">Cambiar Contraseña</button>
                </div>
                <div
                  className={`w-full rounded-lg bg-blue-500 mt-4 hover:bg-blue-400 text-white text-lg font-semibold ${
                    onEdit ? "hidden" : ""
                  }`}
                >
                  <button
                    onClick={() => setOnEdit(true)}
                    type="button"
                    className="w-full p-4"
                  >
                    Editar Perfil
                  </button>
                </div>
                <div
                  className={`w-full rounded-lg bg-blue-500 mt-4 hover:bg-blue-400 text-white text-lg font-semibold ${
                    onEdit ? "" : "hidden"
                  }`}
                >
                  <button type="submit" className="w-full p-4">
                    Actualizar Perfil
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {alert.message && (
        <div className="absolute top-28">
          <Alert exito={alert.exito}>{alert.message}</Alert>
        </div>
      )}
    </>
  );
}
