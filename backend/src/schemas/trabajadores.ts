import mongoose from 'mongoose';

const trabajadoresSchema = new mongoose.Schema({});

const Trabajadores = mongoose.model('Trabajadores', trabajadoresSchema);

export default Trabajadores;