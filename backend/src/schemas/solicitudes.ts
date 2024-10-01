import mongoose from 'mongoose';

const solicitudSchema = new mongoose.Schema({
  'id': { type: String, required: true },
  'id-empresa': { type: String, required: true },
  'id-trabajador': { type: String, required: true },
  'id-trabajo': { type: String, required: true },
  'imagen': { type: String, required: true },
  'estado': { type: String, required: true },
  'titulo': { type: String, required: true },
  'usuario': { type: String, required: true },
  'titulo-trabajo': { type: String, required: true },
});

const Solicitud = mongoose.model('Solicitud', solicitudSchema);

export default Solicitud;