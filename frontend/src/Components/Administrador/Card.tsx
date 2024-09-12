import { TypeEmpresa } from '@/types/empresas';

export const Card = ({ empresa }: { empresa: TypeEmpresa }) => {
  const aceptEmpresa = () => {};
  return (
    <article className="bg-slate-600 text-white rounded-2xl p-6">
      <p>Nombre: {empresa.nombre}</p>
      <p>Certificado: {empresa['certificado-registro']}</p>
      <p>Licencia: {empresa['licencia-comercial']}</p>
      <p>Identificación: {empresa['numero-identificacion']}</p>
      <p>Misión: {empresa.mision}</p>
      <p>Visión: {empresa.vision}</p>
      <p>Sitio web: {empresa['sitio-web']}</p>
      <p>Verificado: {empresa.verificado ? 'Si' : 'No'}</p>
      {empresa.email.map((em, i) => (
        <p key={i}>
          Email {i + 1}:{em}
        </p>
      ))}
      {empresa.direccion.map((dc, i) => (
        <p key={i}>
          Dirección {i + 1}:{dc}
        </p>
      ))}
      {empresa.telefono.map((tel, i) => (
        <p key={i}>
          Teléfono {i + 1}:{tel}
        </p>
      ))}
      {empresa.email.map((em, i) => (
        <p key={i}>
          Email {i + 1}:{em}
        </p>
      ))}
      {empresa.objetivos.map((obj, i) => (
        <p key={i}>
          Objetivo {i + 1}:{obj}
        </p>
      ))}
      {empresa['redes-sociales'].map((red, i) => (
        <p key={i}>
          Redes {i + 1}:{red}
        </p>
      ))}

      <button
        disabled={empresa.verificado}
        onClick={aceptEmpresa}
        className="bg-white text-slate-400 px-2 py-1 rounded-xl"
      >
        Aceptar empresa
      </button>
    </article>
  );
};
