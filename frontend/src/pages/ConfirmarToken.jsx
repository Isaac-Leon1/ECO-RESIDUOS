import axios from 'axios';
import logoEco from '../../public/logo.png';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ConfirmarToken = () => {
    const { token } = useParams();
    const [mensaje, setMensaje] = useState({});

    const verificarToken = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/ciudadano/confirmar/${token}`;
            const respuesta = await axios.get(url);
            setMensaje({ respuesta: respuesta.data.msg, tipo: true });
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false });
        }
    };

    useEffect(() => {
        verificarToken();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            {Object.keys(mensaje).length > 0 && (
                <div
                    className={`${
                        mensaje.tipo ? 'bg-green-200' : 'bg-red-200'
                    } p-2 rounded-lg text-center`}
                >
                    {mensaje.respuesta}
                </div>
            )}
            <img
                className="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600"
                src={logoEco}
                alt="image description"
            />

            <div className="flex flex-col items-center justify-center">
                <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
                    Muchas Gracias
                </p>
                <p className="md:text-lg lg:text-xl text-gray-600 mt-8">
                    Ya puedes iniciar sesión
                </p>
                <Link
                    to="/ciudadano/iniciarSesion"
                    className="p-3 m-5 w-full text-center bg-gray-600 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default ConfirmarToken;