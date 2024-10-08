import { useState } from "react";
import Alert from "../components/Alert";
import axios from "axios";
import { Link } from "react-router-dom";
const RecuperarContrasena = () => {
	const [alert, setAlert] = useState({
		message: "",
		exito: false,
	});
	const [form, setForm] = useState({
		email: "",
	});
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_BACKEND_URL}/ciudadano/recuperarcontrasena`,
				form
			);
			setAlert({ message: response.data.msg, exito: true });
		} catch (error) {
			setAlert({ message: error.response.data.error, exito: false });
		}
	};

	return (
		<>
			<div className="min-h-screen flex justify-center w-full">
				<div className="md:block hidden w-[60%] min-h-screen bg-[url('/public/fondoRegistro.png')] bg-no-repeat bg-cover bg-center"></div>
				<div className="min-h-screen md:w-[40%] w-full flex justify-center">
					<form
						className="flex flex-col gap-4 justify-center  min-h-screen w-3/5"
						onSubmit={handleSubmit}
					>
						<h1 className="text-[#06457C] text-[36px] font-bold text-center">
							Recuperar contraseña
						</h1>

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
								placeholder="Escribe tu correo electrónico"
								id="email"
								name="email"
								value={form.email}
								onChange={handleChange}
							/>
						</div>

						<button className="bg-[#06457C] text-white rounded-lg p-3 mt-12">
							Recuperar contraseña
						</button>
						<p className="text-[14px] text-center">
							¿No tienes cuenta?{" "}
							<Link to="/registro" className="text-[#0464B8]">
								{" "}
								Registrate aquí
							</Link>
						</p>
						{alert.message && (
							<Alert exito={alert.exito}>{alert.message}</Alert>
						)}
					</form>
				</div>
			</div>
		</>
	);
};
export default RecuperarContrasena;
