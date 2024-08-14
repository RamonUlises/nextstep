import mongoose, { Schema } from 'mongoose';

const trabajosSchema: Schema = new mongoose.Schema({
  'id': { type: String, required: true },
  'empresa': { type: String, required: true },
  'descripcion': { type: String, required: true },
  'requerimientos': { type: Array, required: true },
  'fecha-publicacion': { type: Date, required: true },
  'fecha-inicio': { type: Date, required: true },
  'fecha-expericacion': { type: Date, required: true },
  'contrato': { type: String, required: true },
  'presupuesto': { type: Number, required: true },
  'puntos': { type: Number, required: true },
  'etiquetas': { type: Array, required: true },
  'departamento': { type: String, required: true },
});

const Trabajos = mongoose.model('Trabajos', trabajosSchema);

export default Trabajos;
