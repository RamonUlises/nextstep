import mongoose from 'mongoose';

const empresasSchema = new mongoose.Schema({
  'id': { type: String, required: true },
  'numero-identificacion': { type: String, required: true },
  'certificado-registro': { type: String, required: true },
  'licencia-comercial': { type: String, required: true },
  'nombre': { type: String, required: true },
  'direccion': { type: Array, required: true },
  'telefono': { type: Array, required: true },
  'email': { type: Array, required: true },
  'contrasena': { type: String, required: true },
  'redes-sociales': { type: Array, required: true },
  'mision': { type: String, required: true },
  'vision': { type: String, required: true },
  'objetivos': { type: Array, required: true },
  'puntuacion': { type: Number, required: true },
  'imagen': { type: String, required: true },
});

const Empresas = mongoose.model('Empresas', empresasSchema);

export default Empresas;
