import Footer from "../components/Footer";
const Inicio = () => {
	return (
		<>
			<div className="flex flex-col">
				<img src="/fondoEslogan.png" alt="" />
				<p className="m-8 italic">
					Trabajemos juntos por una ciudad que nos haga sentir orgullo de vivir
					y ser parte de ella.
					<br />
					Un Quito cada vez más limpio, hermoso y lleno de vida
				</p>
				<section className="bg-[#D9D9D9] flex justify-between  flex-col lg:flex-row">
					<img className="m-8 mx-auto " src="/senorBasura.png" alt="funda de basura" />
					<article className="bg-[#4B5563] lg:w-2/5 p-6 pl-8 relative">
                        <img className="absolute top-20 right-5 md:right-12" src="/fundaBasura.png" alt="" />
						<h2 className="text-[#67DCE3] font-extrabold text-[24px] ">
							No olvides cómo botar la basura correctamente
						</h2>
						<ol className="flex flex-col gap-4 mt-4">
							<li className="flex items-center gap-4 text-white">
								<div className="bg-white size-8 rounded-full flex justify-center items-center font-semibold text-black">
									1
								</div>
								Separa los residuos.
							</li>
                            <li className="flex items-center gap-4 text-white">
								<div className="bg-white size-8 rounded-full flex justify-center items-center font-semibold text-black">
									2
								</div>
								Usa el contenedor adecuado.
							</li>
                            <li className="flex items-center gap-4 text-white">
								<div className="bg-white size-8 rounded-full flex justify-center items-center font-semibold text-black">
									3
								</div>
								Aplasta envases para ahorrar espacio.
							</li>
                            <li className="flex items-center gap-4 text-white">
								<div className="bg-white size-8 rounded-full flex justify-center items-center font-semibold text-black">
									4
								</div>
								Evita derrames y malos olores.
							</li>
                            <li className="flex items-center gap-4 text-white">
								<div className="bg-white size-8 rounded-full flex justify-center items-center font-semibold text-black">
									5
								</div>
								Saca la basura en el momento adecuado.
							</li>
						</ol>
					</article>
				</section>
			</div>
			<Footer></Footer>
		</>
	);
};
export default Inicio;
