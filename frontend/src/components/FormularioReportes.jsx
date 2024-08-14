import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const FormularioReportes = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fecha: "",
        hora: "",
        lugar: "",
        descripcion: "",
    });

    const [mensaje, setMensaje] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const url = `${import.meta.env.VITE_BACKEND_URL}/ciudadano/reportes`;
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.post(url, form, options);
            setMensaje({
                respuesta: "Reporte enviado con éxito",
                tipo: true,
            });
            setTimeout(() => {
                navigate("/");
            }, 3000);
            console.log(response);
        } catch (error) {
            console.log(error);
            setMensaje({
                respuesta: error.response.data.msg,
                tipo: false,
            });
            setTimeout(() => {
                setMensaje({});
            }, 3000);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 p-4">
                <label htmlFor="fecha">Fecha</label>
                <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={form.fecha}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2"
                />
                <label htmlFor="hora">Hora</label>
                <input
                    type="time"
                    id="hora"
                    name="hora"
                    value={form.hora}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2"
                />
                <label htmlFor="lugar">Lugar</label>
                <input
                    type="text"
                    id="lugar"
                    name="lugar"
                    value={form.lugar}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2"
                />
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    id="descripcion"
                    name="descripcion"
                    value={form.descripcion}
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                    Enviar
                </button>
            </div>
            {mensaje.respuesta && (
                <Alert mensaje={mensaje.respuesta} tipo={mensaje.tipo} />
            )}
        </form>
    );
};

export default FormularioReportes;