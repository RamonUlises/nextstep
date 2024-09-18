import mongoose from 'mongoose';

const trabajosSchema = new mongoose.Schema({
  'id': { type: String, required: true },
  'empresa': { type: String, required: true },
  'descripcion': { type: String, required: true },
  'responsabilidades': { type: Array, required: true },
  'requisitos': { type: Array, required: true },
  'categorias': { type: Array, required: true },
  'beneficios': { type: Array, required: true },
  'contrato': { type: String, required: true },
  'presupuesto': { type: Number, required: true },
  'fecha-publicacion': { type: String, required: true },
  'fecha-inicio': { type: String, required: true },
  'fecha-expiracion': { type: String, required: true },
  'puntos': { type: Number, required: true },
  'estado': { type: String, required: true }
});

const Trabajos = mongoose.model('Trabajos', trabajosSchema);

export default Trabajos;
