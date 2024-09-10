import { TypeColaboradores } from '@/types/colaboradores';

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
  validateString(descripcion, 'descripcion');
  validateLength(descripcion, 'descripcion', 10, 500);

  // 
}

function validateString(value: string, name: string) {
  if (!value) {
    throw `El campo ${name} es obligatorio`;
  }
}

function validateExpression(value: string, name: string, expression: RegExp, patron: string) {
  if (!expression.test(value)) {
    throw `El campo ${name} no cumple con el formato esperado, \n${patron}`;
  }
}

function validateLength(value: string, name: string, min: number, max: number) {
  if (value.length < min || value.length > max) {
    throw `El campo ${name} debe tener entre ${min} y ${max} caracteres`;
  }
}