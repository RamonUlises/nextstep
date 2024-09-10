import { useEffect, useState } from 'react';
import { Header1 } from './Header1';
import { Inputs } from '../Inputs';
import { InputsRedes } from '../InputsRedes';
import { TypeColaboradores } from '@/types/colaboradores';

type Redes = { id: string; red: string | undefined; url: string | undefined };

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
  const [imagen, setImagen] = useState<string>(colaborador.imagen ?? '');

  const addNewRed = () => {
    if (red.length > 4) return;

    for (const r of red) {
      if (r.red === undefined || r.url === undefined || r.url === '') return;
    }

    setRed([
      ...red,
      { id: crypto.randomUUID(), red: undefined, url: undefined },
    ]);
  };

  const handleChange = ({
    prop,
    value,
  }: {
    prop: string | undefined;
    value: string;
  }) => {
    for (const r of red) {
      if (prop !== undefined) {
        if (r.red !== prop && r.red === undefined) {
          r.red = prop;
        }
        if (r.red === prop) {
          r.url = value;
        }
      }
    }
    const redesSoc: string[] = [];

    for (const r of red) {
      if (
        r.red !== undefined &&
        r.red !== '' &&
        r.url !== undefined &&
        r.url !== ''
      ) {
        redesSoc.push(`${r.red}:${r.url}`);
      }
    }
    setRedesSociales(redesSoc);
  };

  const handleDeleteInput = (prop: string | undefined) => {
    setRed(red.filter((r) => r.red !== prop));

    const newRedes = redes.filter((r) => r !== prop);
    setRedes(newRedes);

    if (prop === undefined) return;

    const redesSoc: string[] = [];
    for (const reds of redesSociales) {
      if (reds.split(':')[0] !== prop) {
        redesSoc.push(reds);
      }
    }
    setRedesSociales(redesSoc);
  };

  const changeProp = ({
    prop,
    newProp,
    value,
  }: {
    prop: string | undefined;
    newProp: string | undefined;
    value: string | undefined;
  }) => {
    for (const r of red) {
      if (r.red === prop) {
        r.red = newProp;
      }
      if (r.url === undefined) {
        r.url = value;
      }
    }
    const redesS = red.filter((r) => r.red !== undefined).map((r) => r.red!);
    setRedes(redesS);

    const redesSoc: string[] = [];

    for (const r of red) {
      if (
        r.red !== undefined &&
        r.red !== '' &&
        r.url !== undefined &&
        r.url !== ''
      ) {
        redesSoc.push(`${r.red}:${r.url}`);
      }
    }
    setRedesSociales(redesSoc);
  };

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
      <Header1 setImagen={setImagen} imagen={imagen} />
      <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <Inputs
          value={colaborador.nombres}
          setProp={setNombres}
          type="text"
          placeholder="Nombres y apellidos"
          name="nombres"
        />
        <Inputs
          value={colaborador.usuario}
          setProp={setUsuario}
          type="text"
          placeholder="Usuario"
          name="usuario"
        />
        <Inputs
          value={colaborador.telefono}
          setProp={setTelefono}
          type="text"
          placeholder="Teléfono"
          name="telefono"
        />
        <Inputs
          value={colaborador.email}
          setProp={setEmail}
          type="text"
          placeholder="Correo"
          name="email"
        />
        <Inputs
          value={colaborador.contrasena}
          setProp={setContrasena}
          type="password"
          placeholder="Contraseña"
          name="contrasena"
        />
        <section className="flex flex-col w-full sm:col-span-2">
          <h4 className="text-center dark:text-white">Redes sociales</h4>
          <div>
            {red.map((r) => {
              return (
                <InputsRedes
                  changeProp={changeProp}
                  deleteInput={handleDeleteInput}
                  redes={redes}
                  change={handleChange}
                  key={r.id}
                  propiedad={r.red}
                  valor={r.url}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-principal-500 text-white flex justify-center items-center py-1 px-2 rounded gap-1 text-sm dark:bg-zinc-600 mt-2"
              onClick={addNewRed}
              disabled={red.length > 4}
            >
              Añadir
            </button>
          </div>
        </section>
        <section className="flex flex-col sm:col-span-2 w-full max-w-[600px] px-5 mt-3">
          <label className="text-sm dark:text-white">Descripción</label>
          <textarea
            value={colaborador.descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            name="descripcion"
            className="outline-none p-2 font-light  shadow drop-shadow rounded dark:bg-zinc-700 dark:text-white"
          ></textarea>
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
