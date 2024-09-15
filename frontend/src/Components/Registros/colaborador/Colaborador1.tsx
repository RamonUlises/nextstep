import { useEffect, useState } from 'react';
import { Header1 } from '../Header1';
import { Inputs } from '../Inputs';
import { InputsRedes } from '../InputsRedes';
import { TypeColaboradores } from '@/types/colaboradores';
import {
  addNewRed,
  changeProp,
  handleChange,
  handleDeleteInput,
  Redes,
} from '@/utils/redesComponent';
import { TextTarea } from '../TextTarea';

export const Colaborador1 = ({
  error,
  colaborador,
  nextTab,
  setColaborador,
}: {
  error: string;
  colaborador: TypeColaboradores;
  nextTab: (num: number) => void;
  setColaborador: React.Dispatch<React.SetStateAction<TypeColaboradores>>;
}) => {
  const [red, setRed] = useState<Redes[]>(
    colaborador['redes-sociales'].map((r) => {
      const red = r.split(':');
      return { id: crypto.randomUUID(), red: red[0], url: red[1] };
    })
  );
  const [redes, setRedes] = useState<string[]>([]);

  const [nombres, setNombres] = useState<string>(colaborador.nombres);
  const [usuario, setUsuario] = useState<string>(colaborador.usuario);
  const [telefono, setTelefono] = useState<string>(colaborador.telefono);
  const [email, setEmail] = useState<string>(colaborador.email);
  const [contrasena, setContrasena] = useState<string>(colaborador.contrasena);
  const [descripcion, setDescripcion] = useState<string>(
    colaborador.descripcion
  );
  const [redesSociales, setRedesSociales] = useState<string[]>(
    colaborador['redes-sociales']
  );
  const [imagen, setImagen] = useState<string>(colaborador.imagen);

  useEffect(() => {
    setColaborador((prevColaborador) => ({
      ...prevColaborador,
      nombres,
      usuario,
      telefono,
      email,
      contrasena,
      descripcion,
      'redes-sociales': redesSociales,
      imagen,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    redesSociales,
    redes,
    nombres,
    usuario,
    telefono,
    email,
    contrasena,
    descripcion,
    imagen,
  ]);

  return (
    <section>
      <Header1
        text={
          'Cuéntanos un poco sobre ti. Esta información aparecerá en tu perfil público, para que los compradores potenciales puedan conocerte mejor.'
        }
        titulo="Información personal"
        setImagen={setImagen}
        imagen={imagen}
      />
      <form className="mt-16 flex flex-col gap-4 md:gap-16 justify-items-center">
        <Inputs
          value={colaborador.nombres}
          setProp={setNombres}
          type="text"
          placeholder="Nombre completo"
          name="nombres"
          format="Nombres y apellidos"
        />
        <Inputs
          value={colaborador.usuario}
          setProp={setUsuario}
          type="text"
          placeholder="Nombre de usuario"
          name="usuario"
          format="usuario123"
        />
        <Inputs
          value={colaborador.telefono}
          setProp={setTelefono}
          type="text"
          placeholder="Número de teléfono / celular"
          name="telefono"
          format="0000-0000"
        />
        <Inputs
          value={colaborador.email}
          setProp={setEmail}
          type="text"
          placeholder="Correo"
          name="email"
          format="example@gmail.com"
        />
        <Inputs
          value={colaborador.contrasena}
          setProp={setContrasena}
          type="password"
          placeholder="Contraseña"
          name="contrasena"
          format="+8 caracteres"
        />

        <section className="flex w-full px-5 mt-3 gap-4">
          <TextTarea
            placeholder="Comparte sobre tus experiencias de trabajo y proyectos que has realizado"
            setDescripcion={setDescripcion}
            text="Descripción"
            value={colaborador.descripcion}
          />
        </section>
        <section className="flex flex-col w-full sm:col-span-2">
          <h4 className="text-center dark:text-white">Redes sociales</h4>
          <div>
            {red.map((r) => {
              return (
                <InputsRedes
                  red={red}
                  redesSociales={redesSociales}
                  setRedes={setRedes}
                  setRed={setRed}
                  setRedesSociales={setRedesSociales}
                  changeProp={changeProp}
                  deleteInput={handleDeleteInput}
                  redes={redes}
                  change={handleChange}
                  key={r.id}
                  propiedad={r.red}
                  valor={r.url}
                  options={['facebook', 'instagram', 'whatsapp', 'x', 'tiktok']}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-principal-500 text-white flex justify-center items-center py-1 px-2 rounded gap-1 text-sm dark:bg-zinc-600 mt-2"
              onClick={() => addNewRed(red, setRed)}
              disabled={red.length > 4}
            >
              Añadir
            </button>
          </div>
        </section>
        {error && (
          <div className="flex flex-col w-full sm:col-span-2 mt-4">
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
