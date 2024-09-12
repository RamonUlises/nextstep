import { TypeColaboradores } from '@/types/colaboradores';
import { validateExpression, validateLength, validateString } from '@/utils/validations';

export function validateColaborador(colaborador: TypeColaboradores): void {
  const {
    nombres,
    usuario,
    telefono,
    email,
    contrasena,
    descripcion,
  } = colaborador;

  const expNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){2,4}$/;
  const expUsuario = /^[a-záéíóú0-9]+$/;
  const expTelefono = /^[0-9]{4}-[0-9]{4}$/;
  const expEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Validar nombres
  validateString(nombres, 'nombres');
  validateLength(nombres, 'nombres', 10, 100);
  validateExpression(nombres, 'nombres', expNombre, 'ingrese nombre(s) y apellido(s)');

  // Validar usuario
  validateString(usuario, 'usuario');
  validateLength(usuario, 'usuario', 6, 20);
  validateExpression(usuario, 'usuario', expUsuario, 'solo letras minúsculas y números');

  // Validar telefono
  validateString(telefono, 'telefono');
  validateExpression(telefono, 'telefono', expTelefono, 'XXXX-XXXX');

  // Validar email
  validateString(email, 'correo');
  validateExpression(email, 'correo', expEmail, 'example@gmail.com');

  // Validar contrasena
  validateString(contrasena, 'contrasena');
  validateLength(contrasena, 'contrasena', 8, 25);

  // Validar descripción
  validateString(descripcion, 'descripción');
  validateLength(descripcion, 'descripción', 10, 500);

}