import { TypeEmpresa } from '@/types/empresas';
import { InputEditar } from '../InputEditar';
import { useEffect, useState } from 'react';
import { TextAreaEditar } from '../TextAreaEditar';
import { OptionsInfo } from '@/Components/Registros/OptionsInfo';
import { addNewArray, getElement, InfoCol } from '@/utils/getElement';
import { UserRoundXIcon, X } from 'lucide-react';
import { InputsRedes } from '@/Components/Registros/InputsRedes';
import {
  addNewRed,
  changeProp,
  handleChange,
  handleDeleteInput,
  Redes,
} from '@/utils/redesComponent';
import { validateEmpresaEdit } from '@/utils/validateEmpresa';
import empresas from '@/lib/empresas';

export const EditarEmpresa = ({ empresa }: { empresa: TypeEmpresa }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [empresaEdit, setEmpresaEdit] = useState<TypeEmpresa>(empresa);

  // Estado de email
  const [email, setEmail] = useState<InfoCol[]>(getElement(empresa.email));

  // Estado de teléfono
  const [telefono, setTelefono] = useState<InfoCol[]>(
    getElement(empresa.telefono)
  );

  // Estado de objetivos
  const [objetivos, setObjetivos] = useState<InfoCol[]>(
    getElement(empresa.objetivos)
  );

  // Estado de dirección
  const [direccion, setDireccion] = useState<InfoCol[]>(
    getElement(empresa.direccion)
  );

  // Estados de redes sociales
  const [red, setRed] = useState<Redes[]>(
    empresaEdit['redes-sociales'].map((r) => {
      const red = r.split(':');
      return { id: crypto.randomUUID(), red: red[0], url: red[1] };
    })
  );
  const [redes, setRedes] = useState<string[]>([]);
  const [redesSociales, setRedesSociales] = useState<string[]>(
    empresaEdit['redes-sociales']
  );

  const newImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setEmpresaEdit((prev) => ({ ...prev, imagen: reader.result as string }));
    };
  };

  const deleteImage = () => {
    setEmpresaEdit((prev) => ({ ...prev, imagen: 'sin-imagen' }));
  };

  // Reiniciar estados
  useEffect(() => {
    if (!hidden) {
      document.body.style.overflowY = 'hidden';
      setEmpresaEdit(empresa);
      setDireccion(getElement(empresa.direccion));
      setTelefono(getElement(empresa.telefono));
      setEmail(getElement(empresa.email));
      setObjetivos(getElement(empresa.objetivos));

      if(empresa['sitio-web'] === 'sin-sitio-web') {
        setEmpresaEdit((prev) => ({ ...prev, 'sitio-web': '' }));
      }

      setRed(
        empresa['redes-sociales'].map((r) => {
          const red = r.split(':');
          return { id: crypto.randomUUID(), red: red[0], url: red[1] };
        })
      );
      setRedesSociales(empresa['redes-sociales']);
    } else {
      document.body.style.overflowY = 'auto';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden]);

  // Subir propiedades a la nueva empresa
  useEffect(() => {
    setEmpresaEdit((prev) => ({
      ...prev,
      direccion: addNewArray(direccion),
      telefono: addNewArray(telefono),
      email: addNewArray(email),
      objetivos: addNewArray(objetivos),
      'redes-sociales': redesSociales,
    }));
  }, [email, telefono, objetivos, direccion, red, redesSociales, redes]);

  const handleChangeIn = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmpresaEdit({ ...empresaEdit, [e.target.name]: e.target.value });
  };

  // Editar empresa

  const editarNewEmpresa = async () => {
    try {
      validateEmpresaEdit(empresaEdit);

      try {
        const response = await empresas.editarEmpresa(
          empresaEdit.id,
          empresaEdit
        );

        if (response.status === 200) {
          location.reload();
        }
      } catch (error) {
        if (error instanceof Error) {
          setError('Error al enviar los datos');
        } else if (
          typeof error === 'object' &&
          error != null &&
          'data' in error
        ) {
          const err = error as { data: { message: string; status: number } };
          setError(err.data.message);
        } else {
          setError('Error al enviar los datos');
        }
      }
    } catch (error) {
      setError(error as string);
    }
  };

  return (
    <section>
      <button
        className="bg-blue-500 text-white mt-4 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-sm text-sm font-medium"
        onClick={() => setHidden(false)}
      >
        Editar perfil
      </button>
      <div
        className={`fixed top-0 left-0 bg-black/60 w-screen h-screen z-[200] items-center justify-center ${
          hidden ? 'hidden' : 'flex'
        }`}
      >
        <div className="bg-white p-6 rounded-2xl max-h-[90%] overflow-y-auto overflow-x-hidden relative dark:bg-zinc-800">
          <div className="sticky top-0 bg-transparent flex justify-end">
            <div
              onClick={() => setHidden(true)}
              className="cursor-pointer bg-white border-2 border-black/10 rounded-full"
            >
              <X className="dark:text-zinc-700" width={30} height={30} />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">
              Editar información de la empresa
            </h4>
            <p>Cambia la información de tu empresa.</p>
            <hr className="border-black border-2 dark:border-white" />
          </div>
          <div className="py-4 flex flex-col gap-5 overflow-auto ">
            <div className="flex items-center justify-center gap-4">
              <label className="cursor-pointer">
                {empresaEdit['imagen'] === 'sin-imagen' ? (
                  <div className="w-24 h-24 flex items-center justify-center shadow rounded-full">
                    <UserRoundXIcon width={44} height={44} />
                  </div>
                ) : (
                  <div className="flex items-center gap-4 w-24 h-24">
                    <img
                      src={empresaEdit['imagen']}
                      alt="Imagen de la empresa"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={newImage}
                />
              </label>
              {empresaEdit['imagen'] !== 'sin-imagen' && (
                <button
                  onClick={deleteImage}
                  className="border-2 px-2 py-1 rounded-xl border-red-400 text-red-400"
                >
                  Eliminar
                </button>
              )}
            </div>
            <InputEditar
              type="text"
              name="nombre"
              value={empresaEdit.nombre}
              handleChange={handleChangeIn}
              placeholder="Nombre de la empresa"
            />
            <InputEditar
              type="text"
              name="sitio-web"
              value={empresaEdit['sitio-web']}
              handleChange={handleChangeIn}
              placeholder="example.com"
            />

            <OptionsInfo
              text="Correo"
              format="example@gmail.com"
              option={email}
              setOption={setEmail}
              styles="a"
            />
            <OptionsInfo
              text="Teléfono"
              format="0000-0000"
              option={telefono}
              setOption={setTelefono}
              styles="a"
            />
            <OptionsInfo
              text="Objetivos"
              format="Objetivo"
              option={objetivos}
              setOption={setObjetivos}
              styles="a"
            />
            <OptionsInfo
              text="Dirección"
              format="Dirección"
              option={direccion}
              setOption={setDireccion}
              styles="a"
            />

            <TextAreaEditar
              name="mision"
              value={empresaEdit.mision}
              handleChange={handleChangeIn}
              placeholder="Misión de la empresa"
            />
            <TextAreaEditar
              name="vision"
              value={empresaEdit.vision}
              handleChange={handleChangeIn}
              placeholder="Visión de la empresa"
            />

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
                    options={[
                      'facebook',
                      'instagram',
                      'whatsapp',
                      'x',
                      'tiktok',
                    ]}
                  />
                );
              })}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="border-2 border-secundario-600 text-secundario-600 flex justify-center items-center py-1 px-2 rounded gap-1 text-sm dark:bg-zinc-600 dark:border-white dark:text-white"
                onClick={() => addNewRed(red, setRed)}
                disabled={red.length > 4}
              >
                Añadir
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={editarNewEmpresa}
              className="bg-blue-500 text-white px-6 py-2 rounded-xl cursor-pointer"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
      {error && (
        <div className="bg-red-500 text-white px-6 py-4 rounded-xl fixed z-[9999] bottom-0 right-0 mb-4 mr-4 flex items-center gap-4">
          <p>{error}</p>
          <div className="border-2 cursor-pointer rounded-full">
            <X width={24} height={24} onClick={() => setError('')} />
          </div>
        </div>
      )}
    </section>
  );
};
