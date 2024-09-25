import { useEffect, useState } from 'react';
import { UserRoundXIcon, X } from 'lucide-react';
import { InputsRedes } from '@/Components/Registros/InputsRedes';
import {
  addNewRed,
  changeProp,
  handleChange,
  handleDeleteInput,
  Redes,
} from '@/utils/redesComponent';
import { TypeColaboradores } from '@/types/colaboradores';
import { InputEditar } from '../InputEditar';
import { Options } from '@/Components/Registros/colaborador/Options';
import { TextAreaEditar } from '../TextAreaEditar';
import { OptionsInfo } from '@/Components/Registros/OptionsInfo';
import { addNewArray, getElement, InfoCol } from '@/utils/getElement';
import { validateColaboradorEdit } from '@/utils/validateColaborador';
import colaboradorPet from '@/lib/colaboradores';

export const EditarColaborador = ({ colaborador }: { colaborador: TypeColaboradores }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [colaboradorEdit, setColaboradorEdit] = useState<TypeColaboradores>(colaborador);

  // Estados de redes sociales
  const [red, setRed] = useState<Redes[]>(
    colaboradorEdit['redes-sociales'].map((r) => {
      const red = r.split(':');
      return { id: crypto.randomUUID(), red: red[0], url: red[1] };
    })
  );
  const [redes, setRedes] = useState<string[]>([]);
  const [redesSociales, setRedesSociales] = useState<string[]>(
    colaboradorEdit['redes-sociales']
  );

  // Estados de educación
  const [educacionPrimaria, setEducacionPrimaria] = useState<boolean>(
    colaboradorEdit['educacion-primaria']
  );
  const [educacionSecundaria, setEducacionSecundaria] = useState<boolean>(
    colaboradorEdit['educacion-secundaria']
  );

  // Estados de títulos
  const [titulo, setTitulo] = useState<InfoCol[]>(getElement(colaboradorEdit.titulos));

  // Estados de certificados
  const [certificado, setCertificado] = useState<InfoCol[]>(getElement(colaboradorEdit.certificados));

  // Estados de habilidades
  const [habilidades, setHabilidades] = useState<InfoCol[]>(getElement(colaboradorEdit.habilidades));

  // Estados de idiomas
  const [idiomas, setIdiomas] = useState<InfoCol[]>(getElement(colaboradorEdit.idiomas));

  // Estados de referencias
  const [referencias, setReferencias] = useState<InfoCol[]>(getElement(colaboradorEdit.referencias));

  const newImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setColaboradorEdit((prev) => ({ ...prev, imagen: reader.result as string }));
    };
  };

  const deleteImage = () => {
    setColaboradorEdit((prev) => ({ ...prev, imagen: 'sin-imagen' }));
  };

  // Reiniciar estados
  useEffect(() => {
    if (!hidden) {
      document.body.style.overflowY = 'hidden';

      setColaboradorEdit(colaborador);
      setRed(
        colaborador['redes-sociales'].map((r) => {
          const red = r.split(':');
          return { id: crypto.randomUUID(), red: red[0], url: red[1] };
        })
      );
      setRedesSociales(colaborador['redes-sociales']);
      setTitulo(getElement(colaborador.titulos));
      setCertificado(getElement(colaborador.certificados));
      setHabilidades(getElement(colaborador.habilidades));
      setIdiomas(getElement(colaborador.idiomas));
      setReferencias(getElement(colaborador.referencias));
    } else {
      document.body.style.overflowY = 'auto';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden]);

  // Subir propiedades a la nueva empresa
  useEffect(() => {
    setColaboradorEdit((prev) => ({
      ...prev,
      'redes-sociales': redesSociales,
      'educacion-primaria': educacionPrimaria,
      'educacion-secundaria': educacionSecundaria,
      titulos: addNewArray(titulo),
      certificados: addNewArray(certificado),
      habilidades: addNewArray(habilidades),
      idiomas: addNewArray(idiomas),
      referencias: addNewArray(referencias),
    }));
  }, [red, redesSociales, redes, educacionPrimaria, educacionSecundaria, titulo, certificado, habilidades, idiomas, referencias]);

  const handleChangeIn = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setColaboradorEdit({ ...colaboradorEdit, [e.target.name]: e.target.value });
  };

  // Editar colaborador

  const editarNewColaborador = async () => {
    try {
      validateColaboradorEdit(colaboradorEdit);

      try {
        const response = await colaboradorPet.editarColaborador(colaborador.id, colaboradorEdit);

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
        <div className="bg-white p-6 rounded-2xl max-h-[90%] overflow-y-auto overflow-x-hidden relative dark:bg-zinc-700">
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
                {colaboradorEdit['imagen'] === 'sin-imagen' ? (
                  <div className="w-24 h-24 flex items-center justify-center shadow rounded-full">
                    <UserRoundXIcon width={44} height={44} />
                  </div>
                ) : (
                  <div className="flex items-center gap-4 w-24 h-24">
                    <img
                      src={colaboradorEdit['imagen']}
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
              {colaboradorEdit['imagen'] !== 'sin-imagen' && (
                <button
                  onClick={deleteImage}
                  className="border-2 px-2 py-1 rounded-xl border-red-400 text-red-400"
                >
                  Eliminar
                </button>
              )}
            </div>
            <InputEditar handleChange={handleChangeIn} name='nombres' value={colaboradorEdit.nombres} placeholder='Nombres y apellidos' type='text' />
            <InputEditar handleChange={handleChangeIn} name='usuario' value={colaboradorEdit.usuario} placeholder='minúsculas y números' type='text' />
            <InputEditar handleChange={handleChangeIn} name='telefono' value={colaboradorEdit.telefono} placeholder='0000-0000' type='text' />
            <InputEditar handleChange={handleChangeIn} name='email' value={colaboradorEdit.email} placeholder='example@gmail.com' type='text' />
            <div className='flex flex-col items-start gap-2'>
              <Options text='Educación primaria' default={colaboradorEdit['educacion-primaria']} setOption={setEducacionPrimaria} />
              <Options text='Educación secundaria' default={colaboradorEdit['educacion-secundaria']} setOption={setEducacionSecundaria} />
            </div>
            <TextAreaEditar handleChange={handleChangeIn} name='descripcion' value={colaboradorEdit.descripcion} placeholder='Descripción' />
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
            <OptionsInfo text='Títulos' format='Nombre del título' option={titulo} setOption={setTitulo} />
            <OptionsInfo text='Certificados' format='Nombre del certificado' option={certificado} setOption={setCertificado} />
            <OptionsInfo text='Habilidades' format='Nombre de la habilidad' option={habilidades} setOption={setHabilidades} />
            <OptionsInfo text='Idiomas' format='Nombre del idioma' option={idiomas} setOption={setIdiomas} />
            <OptionsInfo text='Referencias' format='Nombre de la referencia' option={referencias} setOption={setReferencias} />
            
          </div>
          <div>
            <button
              onClick={editarNewColaborador}
              className="bg-blue-500 text-white px-6 py-2 rounded-xl cursor-pointer"
            >
              Editar
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
