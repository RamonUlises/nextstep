import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  'id': { type: String, required: true },
  'id-empresa': { type: String, required: true },
  'usuario': { type: String, required: true },
  'titulo': { type: String, required: true },
});

const Calificar = mongoose.model('Calificar', Schema);

export default Calificar;