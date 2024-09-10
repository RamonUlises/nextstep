import mongoose from 'mongoose';

const trabajadoresSchema = new mongoose.Schema({
  'id': { type: String, required: true },
  'nombres': { type: String, required: true },
  'usuario': { type: String, required: true },
  'telefono': { type: String, required: true },
  'email': { type: String, required: true },
  'contrasena': { type: String, required: true },
  'redes-sociales': { type: Array, required: true },
  'imagen': { type: String, required: true },
  'descripcion': { type: String, required: true },
  'educacion-primaria': { type: Boolean, required: true },
  'educacion-secundaria': { type: Boolean, required: true },
  'titulos': { type: Array, required: true },
  'idiomas': { type: Array, required: true },
  'certificados': { type: Array, required: true },
  'referencias': { type: Array, required: true },
  'habilidades': { type: Array, required: true },
  'puntos': { type: Number, required: true },
  'puntuacion': { type: Number, required: true },
  'saldo': { type: Number, required: true },
});

const Trabajadores = mongoose.model('Trabajadores', trabajadoresSchema);

export default Trabajadores;
