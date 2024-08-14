import Reportes from "../models/Reportes.js";
import mongoose from "mongoose";

const listarTodos = async (req,res) => {
    const reportes = await Reportes.find({estado:true}).select("-createdAt -updatedAt -__v").populate('ciudadano','_id nombre apellido email telefono')
    res.status(200).json(reportes)
}

const eliminarReporte = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`Lo sentimos, el id ${id} no es válido`})
    await Reportes.findByIdAndUpdate(id,{estado:false})
    res.status(200).json({msg:"Reporte eliminado correctamente"})
}

const detalleReporte = async (req,res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`Lo sentimos, el id ${id} no es válido`})
    const reporte = await Reportes.findById(id).select("-createdAt -updatedAt -__v").populate('ciudadano','_id nombre apellido email telefono')
    res.status(200).json(reporte)
}

const actualizarReporte = async (req,res) => {
    const {id} = req.params
    const {descripcion,lugar,fecha,hora} = req.body
    if (Object.keys(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`Lo sentimos, el id ${id} no es válido`})
    await Reportes.findByIdAndUpdate(id,{descripcion,lugar,fecha,hora})
    res.status(200).json({msg:"Reporte actualizado correctamente"})
}

const listarReportesPorCiudadano = async (req,res)=>{
    const { id } = req.params
    const reportes = await Reportes.find({ciudadano: id}).populate('ciudadano','_id nombre apellido email telefono')
    if (!reportes) return res.status(404).json({msg:"Lo sentimos, no se encontraron reportes"})
    res.status(200).json(reportes)
}

export {
    listarTodos,
    eliminarReporte,
    detalleReporte,
    actualizarReporte,
    listarReportesPorCiudadano
}