export const preguntas: Preguntas[] = [
  {
    pregunta: '¿Cómo puedo registrarme?',
    respuesta:
      'Para registrarte en nuestra plataforma, debes dirigirte a la sección de registro y completar el formulario con tus datos personales.'
  },
  {
    pregunta: '¿Cómo puedo recuperar mi contraseña?',
    respuesta:
      'Para recuperar tu contraseña, debes dirigirte a la sección de recuperación de contraseña e ingresar tu correo electrónico.'
  },
  {
    pregunta: '¿Cómo puedo publicar un trabajo?',
    respuesta:
      'Para publicar un trabajo, debes dirigirte a la sección de trabajos y completar el formulario con los datos del trabajo.'
  },
  {
    pregunta: '¿Cómo puedo contactar a un colaborador?',
    respuesta:
      'Para contactar a un colaborador, debes dirigirte a la sección de colaboradores y seleccionar el perfil del colaborador que deseas contactar.'
  },
  {
    pregunta: '¿Cómo puedo contactar a una empresa?',
    respuesta:
      'Para contactar a una empresa, debes dirigirte a la sección de empresas y seleccionar el perfil de la empresa que deseas contactar.'
  }
];

interface Preguntas {
  pregunta: string;
  respuesta: string;
}