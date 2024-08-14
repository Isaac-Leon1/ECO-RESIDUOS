import axios from "axios";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import { Link, useParams } from "react-router-dom";

const EmailConfirmado = () => {
	const { tipo, token } = useParams();

	const [alert, setAlert] = useState({
		message: [],
		exito: false,
	});

	useEffect(() => {
		const confirmarEmail = async () => {
			try {
				const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`);
				setAlert({ message: response.data.msg, exito: true });
			} catch (error) {
				console.log(error);
				setAlert({ message: error.response.data.msg, exito: false });
			}
		};
		confirmarEmail();
	}, []);

	return (
		<>
			<div className="min-h-screen w-full flex flex-col justify-center items-center gap-4">
				<img src="/logo.png" className="w-80 mx-auto pb-10"></img>
				<h1 className="text-[#06457C] text-[36px] font-bold text-center">
					Email confirmado
				</h1>

				<img src="/imgConfirmarEmail.png" />

				<p className= "text-center">
					Tu cuenta ha sido confirmada exitosamente, ahora puedes iniciar
					sesión.
				</p>
				<Link
					to="/login"
					className="text-center bg-[#06457C] text-white rounded-lg p-3 "
				>
					Iniciar sesión
				</Link>

				{alert.message && <Alert exito={alert.exito}>{alert.message}</Alert>}
			</div>
		</>
	);
};
export default EmailConfirmado;
