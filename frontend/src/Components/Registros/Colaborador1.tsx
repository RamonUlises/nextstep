import { useState } from 'react';
import { Header1 } from './colaborador/Header1';
import { Inputs } from './Inputs';
import { InputsRedes } from './InputsRedes';

type Redes = { red: string | undefined; url: string | undefined };

export const Colaborador1 = ({ nextTab }:{ nextTab: (num: number) => void }) => {
  const [red, setRed] = useState<Redes[]>([]);
  const [redes, setRedes] = useState<string[]>([]);

  const addNewRed = () => {
    if (red.length > 3) return;

    for (const r of red) {
      if (r.red === undefined || r.url === undefined) return;
    }

    setRed([...red, { red: undefined, url: undefined }]);
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
    const redes = red.filter((r) => r.red !== undefined).map((r) => r.red!);
    setRedes(redes);
  };

  const handleDeleteInput = (prop: string | undefined) => {
    const newRedes = red.filter((r) => r.red !== prop);
    setRed(newRedes);
  };

  return (
    <section>
      <Header1 />
      <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <Inputs type="text" placeholder="Nombres" name="nombres" />
        <Inputs type="text" placeholder="Usuario" name="usuario" />
        <Inputs type="text" placeholder="Teléfono" name="telefono" />
        <Inputs type="email" placeholder="Correo" name="email" />
        <Inputs type="password" placeholder="Contraseña" name="contrasena" />
        <section className="flex flex-col w-full sm:col-span-2">
          <h4 className="text-center">Redes sociales</h4>
          <div>
            {red.map((_, i) => (
              <InputsRedes deleteInput={handleDeleteInput} redes={redes} change={handleChange} key={i} />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="font-light bg-principal-400 flex justify-center items-center py-1 px-2 rounded gap-1 text-sm"
              onClick={addNewRed}
              disabled={red.length > 3}
            >
              Añadir
            </button>
          </div>
        </section>
        <section className="flex flex-col sm:col-span-2 w-full max-w-[600px] px-5 mt-3">
          <label className="text-sm">Descripción</label>
          <textarea
            name="descripcion"
            className="outline-none p-2 font-light border shadow drop-shadow"
          ></textarea>
        </section>

        <section className="flex justify-center sm:col-span-2 mt-4 gap-3">
          <button onClick={() => nextTab(2)} type='button' className="bg-principal-600 text-white rounded-xl py-2 px-4">
            Siguiente
          </button>
        </section>
      </form>
    </section>
  );
};
