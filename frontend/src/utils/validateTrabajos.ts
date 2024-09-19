import { TypeTrabajos } from '@/types/trabajos';
import {
  validateArray,
  validateLength,
  validateLengthArray,
  validateNumber,
  validateString,
} from './validations';

export function validateTrabajo(trabajo: TypeTrabajos) {
  const {
    titulo,
    ubicacion,
    contrato,
    responsabilidades,
    descripcion,
    requisitos,
    'presupuesto-min': presupuestoMin,
    'presupuesto-max': presupuestoMax,
    categorias,
    beneficios,
  } = trabajo;

  // Validar título
  validateString(titulo, 'título');
  validateLength(titulo, 'título', 5, 50);

  // validar ubicación
  validateString(ubicacion, 'ubicación');
  validateLength(ubicacion, 'ubicación', 5, 50);

  // validar contrato
  validateString(contrato, 'contrato');

  // validar descripción
  validateString(descripcion, 'descripción');
  validateLength(descripcion, 'descripción', 20, 500);

  // validar responsabilidades
  validateArray(responsabilidades, 'responsabilidad');
  validateLengthArray(responsabilidades, 'responsabilidad', 5, 50);

  // validar requisitos
  validateArray(requisitos, 'requisito');
  validateLengthArray(requisitos, 'requisito', 5, 50);

  // validar presupuesto mínimo
  validateNumber(presupuestoMin, 'presupuesto mínimo');

  // validar presupuesto máximo
  validateNumber(presupuestoMax, 'presupuesto máximo');

  // validar presupuestos
  if (presupuestoMin > presupuestoMax) {
    throw 'El presupuesto mínimo no puede ser mayor al presupuesto máximo';
  }

  // validar categorias
  validateArray(categorias, 'categoría');

  // validar beneficios
  validateArray(beneficios, 'beneficio');
  validateLengthArray(beneficios, 'beneficio', 5, 50);
}
