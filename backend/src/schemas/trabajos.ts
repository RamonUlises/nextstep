import mongoose from 'mongoose';

const trabajosSchema = new mongoose.Schema({
  'id': { type: String, required: true },
  'empresa': { type: String, required: true },
  'descripcion': { type: String, required: true },
  'requerimientos': { type: Array, required: true },
  'fecha-publicacion': { type: String, required: true },
  'fecha-inicio': { type: String, required: true },
  'fecha-expericacion': { type: String, required: true },
  'contrato': { type: String, required: true },
  'presupuesto': { type: Number, required: true },
  'puntos': { type: Number, required: true },
  'etiquetas': { type: Array, required: true },
  'departamento': { type: Array, required: true },
});

const Trabajos = mongoose.model('Trabajos', trabajosSchema);

export default Trabajos;
