import { Router } from 'express'
import {
    listarTodos,
    eliminarReporte,
    detalleReporte,
    actualizarReporte,
    listarReportesPorCiudadano
} from '../controllers/reportes_controller.js'
import verificarAutenticacion from '../middlewares/auth.js'

const router = Router()

router.get('/reportes',verificarAutenticacion,listarTodos)
router.get('/reportes/:id',verificarAutenticacion,listarReportesPorCiudadano)
router.route('/reporte/:id')
    .delete(verificarAutenticacion,eliminarReporte)
    .get(verificarAutenticacion,detalleReporte)
    .put(verificarAutenticacion,actualizarReporte)

export default router