import { TypeEmpresa } from '@/types/empresas';
import { Header1 } from '../Header1';
import { useEffect, useState } from 'react';
import { Inputs } from '../Inputs';
import { OptionsInfo } from '../OptionsInfo';
import { addNewArray, getElement, InfoCol } from '@/utils/getElement';

export const Empresa1 = ({
  error,
  empresa,
  setEmpresa,
  nextTab,
}: {
  error: string;
  empresa: TypeEmpresa;
  setEmpresa: React.Dispatch<React.SetStateAction<TypeEmpresa>>;
  nextTab: (num: number) => void;
}) => {
  const [imagen, setImagen] = useState<string>(empresa.imagen);
  const [numeroIdentificacion, setNumeroIdentificacion] = useState<string>(empresa['numero-identificacion']);
  const [certificadoRegistro, setCertificadoRegistro] = useState<string>(empresa['certificado-registro']);
  const [licenciaComercial, setLicenciaComercial] = useState<string>(empresa['licencia-comercial']);
  const [nombre, setNombre] = useState<string>(empresa.nombre);
  const [contrasena, setContrasena] = useState<string>(empresa.contrasena);
  const [telefono, setTelefono] = useState<InfoCol[]>(getElement(empresa.telefono));
  const [email, setEmail] = useState<InfoCol[]>(getElement(empresa.email));

  useEffect(() => {
    setEmpresa((prev) => ({
      ...prev, 
      imagen,
      'numero-identificacion': numeroIdentificacion,
      'certificado-registro': certificadoRegistro,
      'licencia-comercial': licenciaComercial,
      nombre,
      contrasena,
      telefono: addNewArray(telefono),
      email: addNewArray(email),
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagen, numeroIdentificacion, certificadoRegistro, licenciaComercial, nombre, contrasena, telefono, email]);
  return (
    <section>
      <Header1
        titulo="Acerca de la empresa"
        text="Es importante destacar aspectos claves que ayuden a generar confianza y credibilidad con los compradores potenciales"
        imagen={imagen}
        setImagen={setImagen}
      />
      <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <Inputs
          value={empresa['numero-identificacion']}
          setProp={setNumeroIdentificacion}
          type="text"
          placeholder="Número de identificación"
          name="numero-identificacion"
        />
        <Inputs
          value={empresa['certificado-registro']}
          setProp={setCertificadoRegistro}
          type="text"
          placeholder="Certificado de registro"
          name="certificado-registro"
        />
        <Inputs
          value={empresa['licencia-comercial']}
          setProp={setLicenciaComercial}
          type="text"
          placeholder="Licencia comercial"
          name="licencia-comercial"
        />
        <Inputs
          value={empresa.nombre}
          setProp={setNombre}
          type="text"
          placeholder="Nombre de la empresa"
          name="nombre"
        />
        <Inputs
          value={empresa.contrasena}
          setProp={setContrasena}
          type="password"
          placeholder="Contraseña"
          name="contrasena"
        />
        <div className='sm:col-span-2 flex justify-evenly flex-col md:flex-row gap-2 md:items-center'>
          <OptionsInfo text='Teléfono(s)' option={telefono} setOption={setTelefono} />
          <OptionsInfo text='Correo(s)' option={email} setOption={setEmail} />
        </div>
        {error && (
          <div className="flex flex-col w-full sm:col-span-2 mt-3">
            <p className="text-red-500 text-center">{error}</p>
          </div>
        )}
      </form>
      <section className="flex justify-end mt-4 mx-4">
        <button
          onClick={() => nextTab(2)}
          type="button"
          className="border-2 border-principal-600 text-principal-600 rounded-xl py-2 px-4 dark:bg-zinc-700 mt-7 mb-5 text-sm sm:text-base dark:border-zinc-400 dark:text-white"
        >
          Siguiente
        </button>
      </section>
    </section>
  );
};
