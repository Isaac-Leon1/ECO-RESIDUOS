import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Alert from '../components/Alert';

const DetalleRuta = () => {
    const { id } = useParams()
    const [ruta, setRuta] = useState({})
    const [alert, setAlert] = useState({})

    useEffect(() => {
        const consultarRuta = async () => {
            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/rutas/${id}`
                const options = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const respuesta = await axios.get(url, options)
                setRuta(respuesta.data.msg)
            } catch (error) {
                setAlert({message: error.response.data.msg, exito: false })
            }
        }
        consultarRuta()
    }, [])

    return (
        <>
            <div className='flex justify-center flex-col'>
                <Link to={'/listar-rutas'} className='flex gap-6 bg-[#67DCE3] hover:bg-[#a7fbff] text-black font-bold py-3 px-14 mx-16 rounded absolute'>
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.6242 20.6247C23.496 20.6247 23.3695 20.5987 23.2543 20.5488C23.1391 20.4988 23.0382 20.4262 22.9593 20.3364C21.7538 18.9644 20.6353 17.9054 19.0928 17.1958C17.6653 16.5409 15.8723 16.1992 13.4992 16.1354V19.8747C13.4987 20.0211 13.45 20.1641 13.3592 20.2862C13.2683 20.4083 13.1392 20.5041 12.9878 20.5617C12.8364 20.6194 12.6694 20.6364 12.5073 20.6107C12.3451 20.585 12.195 20.5177 12.0754 20.417L2.79416 12.542C2.71168 12.472 2.64603 12.3878 2.60118 12.2946C2.55633 12.2014 2.5332 12.101 2.5332 11.9997C2.5332 11.8983 2.55633 11.7979 2.60118 11.7047C2.64603 11.6115 2.71168 11.5273 2.79416 11.4573L12.0754 3.58232C12.195 3.48167 12.3451 3.41434 12.5073 3.38862C12.6694 3.3629 12.8364 3.37992 12.9878 3.43758C13.1392 3.49524 13.2683 3.59102 13.3592 3.71312C13.45 3.83521 13.4987 3.97827 13.4992 4.12466V7.89154C17.409 8.05138 20.322 9.34044 22.1661 11.7292C23.6938 13.7078 24.468 16.4481 24.468 19.8747C24.468 20.0736 24.3791 20.2643 24.2209 20.405C24.0626 20.5456 23.848 20.6247 23.6242 20.6247Z" fill="black"/>
                </svg>
                <span>Volver</span>
                </Link>
                <h1 className='text-center text-3xl font-bold text-[#06457C] m-5'>Detalle Ruta</h1>
                <p className='mx-16 mt-8 font-semibold'>Aquí podrás visualizar en detalle cada ruta</p>
            </div>
            <div>
                {
                Object.keys(ruta).length != 0 ?
                    (
                        <>
                        <div className='m-5 flex justify-center'>
                            <div>
                                <p className="text-md text-gray-00 mt-4">
                                    <span className="text-gray-600 font-bold">Nombre de la ruta: </span>
                                    {ruta.nombre}
                                </p>
                                <p className="text-md text-gray-00 mt-4">
                                    <span className="text-gray-600 font-bold">La ruta de recolección empieza en: </span>
                                    {ruta.empiezaEn}
                                </p>
                                <p className="text-md text-gray-00 mt-4">
                                    <span className="text-gray-600 font-bold">La ruta de recolección finaliza en: </span>
                                    {ruta.finalizaEn}
                                </p>
                                <p className="text-md text-gray-00 mt-4">
                                    <span className="text-gray-600 font-bold">Días del recorrido: </span>
                                    {ruta.dias}
                                </p>
                                <p className="text-md text-gray-00 mt-4">
                                    <span className="text-gray-600 font-bold">Horario: </span>
                                    {ruta.horario}
                                </p>
                                <p className="text-md text-gray-00 mt-4">
                                    <span className="text-gray-600 font-bold">Tipo de Residuo: </span>
                                    {ruta.tipoResiduos}
                                </p>
                                <p className="text-md text-gray-00 mt-4">
                                    <span className="text-gray-600 uppercase font-bold">Estado: </span>
                                    <span className="bg-green-500 text-slate-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{ruta.estado && "activo"}</span>
                                </p>
                            </div>
                        </div>
                        </>
                    )
                    :
                    (
                        Object.keys(alert).length > 0 && <Alert exito={alert.exito}>{alert.message}</Alert>
                    )
                }
            </div>
        </>

    )
}

export default DetalleRuta