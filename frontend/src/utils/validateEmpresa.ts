import { TypeEmpresa } from '@/types/empresas';
import {
  validateArray,
  validateExpressArray,
  validateExpression,
  validateLength,
  validateLengthArray,
  validateString,
} from '@/utils/validations';

export function validateEmpresa(empresa: TypeEmpresa) {
  const {
    direccion,
    'redes-sociales': redesSociales,
    mision,
    vision,
    objetivos,
  } = empresa;

  validationEmpresa(empresa);

  // Validate address
  validateArray(direccion, 'dirección');
  validateLengthArray(direccion, 'dirección', 3, 50);

  // validate objectives
  validateArray(objetivos, 'objetivos');
  validateLengthArray(objetivos, 'objetivo', 3, 50);

  // Validate social networks
  validateArray(redesSociales, 'redes sociales');
  validateLengthArray(redesSociales, 'red social', 3, 50);

  // Validate mission
  validateString(mision, 'misión');
  validateLength(mision, 'misión', 10, 80);

  // Validate vision
  validateString(vision, 'visión');
  validateLength(vision, 'visión', 10, 80);
}

export const validationEmpresa = (empresa: TypeEmpresa) => {
  const {
    'numero-identificacion': numeroIdentificacion,
    'certificado-registro': certificadoRegistro,
    'licencia-comercial': licenciaComercial,
    nombre,
    telefono,
    email,
    contrasena,
    'sitio-web': sitioWeb,
  } = empresa;

  const expNumId = /^[0-9]{3}-[0-9]{6}-[0-9]{4}[A-Za-z]?$/;
  const expCerReg = /^[0-9]{6}-[0-9]{4}$/;
  const expComLic = /^[A-Za-z]{0,2}-?[0-9]{4,6}\/?[0-9]{0,4}$/;
  const expSitio = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,6}$/;
  const expTel = /^[0-9]{4}-[0-9]{4}$/;
  const expEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate number identification
  validateString(numeroIdentificacion, 'número de identificación');
  validateExpression(
    numeroIdentificacion,
    'número de identificación',
    expNumId,
    '###-######-####X'
  );

  // Validate certificate registration
  validateString(certificadoRegistro, 'certificado de registro');
  validateExpression(
    certificadoRegistro,
    'certificado de registro',
    expCerReg,
    '######-####'
  );

  // Validate commercial license
  validateString(licenciaComercial, 'licencia comercial');
  validateExpression(
    licenciaComercial,
    'licencia comercial',
    expComLic,
    'XX-######/####'
  );

  // Validate name
  validateString(nombre, 'nombre');
  validateLength(nombre, 'nombre', 3, 50);

  // Validate password
  validateString(contrasena, 'contraseña');
  validateLength(contrasena, 'contraseña', 8, 50);

  // Validate website
  if (sitioWeb.length > 0) {
    validateExpression(
      sitioWeb,
      'sitio web',
      expSitio,
      'ejemplo.com (sin http:// o https://)'
    );
  }

  // Validate cellphone
  validateArray(telefono, 'teléfono');
  validateExpressArray(telefono, 'teléfono', expTel, '####-####');

  // Validate email
  validateArray(email, 'correo electrónico');
  validateExpressArray(
    email,
    'correo electrónico',
    expEmail,
    'example@gmail.com'
  );
};

export function validateEmpresaEdit(empresa: TypeEmpresa) {
  const {
    nombre,
    'sitio-web': sitioWeb,
    email,
    telefono,
    objetivos,
    direccion,
    mision,
    vision,
    'redes-sociales': redesSociales,
  } = empresa;

  // Regular expression
  const expSitio = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,6}$/;
  const expTel = /^[0-9]{4}-[0-9]{4}$/;
  const expEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate name
  validateString(nombre, 'nombre');
  validateLength(nombre, 'nombre', 3, 50);

  // Validate website
  if (sitioWeb.length > 0) {
    validateExpression(
      sitioWeb,
      'sitio web',
      expSitio,
      'ejemplo.com (sin http:// o https://)'
    );
  }

  // Validate email
  validateArray(email, 'correo electrónico');
  validateExpressArray(
    email,
    'correo electrónico',
    expEmail,
    'example@gmail.com'
  );

  // Validate cellphone
  validateArray(telefono, 'teléfono');
  validateExpressArray(telefono, 'teléfono', expTel, '####-####');

  // validate objectives
  validateArray(objetivos, 'objetivos');
  validateLengthArray(objetivos, 'objetivo', 3, 50);

  // Validate address
  validateArray(direccion, 'dirección');
  validateLengthArray(direccion, 'dirección', 3, 50);

  // Validate mission
  validateString(mision, 'misión');
  validateLength(mision, 'misión', 10, 80);

  // Validate vision
  validateString(vision, 'visión');
  validateLength(vision, 'visión', 10, 80);

  // Validate social networks
  validateArray(redesSociales, 'redes sociales');
  validateLengthArray(redesSociales, 'red social', 3, 50);
}
