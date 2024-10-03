import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/Components/ui/input-otp';
import { LayoutScreen } from '@/Layouts/LayoutScreen';
import { recuperarContrasena } from '@/lib/auth';
import colaborador from '@/lib/colaboradores';
import empresas from '@/lib/empresas';
import { useState } from 'react';

export const RecuperarContrasena = () => {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const [token, setToken] = useState('');
  const [tokenUsuario, setTokenUsuario] = useState('');
  const [type, setType] = useState('');
  const [verificar, setVerificar] = useState(false);

  const [id, setId] = useState('');

  const [contrasena, setContrasena] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  };

  const buscarUsuario = async () => {
    try {
      const response = await recuperarContrasena(email);

      if (response.status === 200) {
        setError('');
        setMessage(response.data.message);
        setToken(response.data.token);
        setType(response.data.type);
        setId(response.data.id);
      } else {
        setError(response.data.message);
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
  };

  const handleChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenUsuario(e.target.value);
  };

  const verificarToken = () => {
    if (token === tokenUsuario) {
      setError('');
      setMessage('');
      setVerificar(true);
    } else {
      setError('El código es incorrecto');
    }
  };

  const cambiarContrasena = async () => {
    try {
      if(type === 'empresa'){
        const response = await empresas.cambiarContrasenaPerdida(id, contrasena);

        if (response.status === 200) {
          setError('');
          setMessage(response.data.message);

          setTimeout(() => {
            window.location.href = '/login';
          }, 3000);
        }
      } else if(type === 'colaborador'){
        const response = await colaborador.cambiarContrasenaPerdida(id, contrasena);

        if (response.status === 200) {
          setError('');
          setMessage(response.data.message);

          setTimeout(() => {
            window.location.href = '/login';
          }, 3000);
        }
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
  };
  return (
    <LayoutScreen className="h-full flex flex-col items-center justify-center">
      <form
        className="shadow-2xl drop-shadow-lg px-8 py-16 rounded-xl"
      >
        {token === '' && (
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold dark:text-white">Recuperar contraseña</h2>
            <p className="text-center text-gray-500 dark:text-white">
              Ingresa tu correo electrónico para recuperar tu contraseña
            </p>
            <input
              type="email"
              className="w-80 p-2 mt-4 border border-gray-300 rounded-md"
              placeholder="Correo electrónico"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {error && (
              <p
                className={`${
                  error.includes('enviado')
                    ? 'text-secundario-600'
                    : 'text-red-600'
                } mt-4`}
              >
                {error}
              </p>
            )}
            <div>
              <button
                onClick={buscarUsuario}
                type="button"
                className="px-8 py-2 mt-8 text-white bg-secundario-500 rounded-md dark:bg-zinc-600 dark:border-white dark:border-2 hover:bg-secundario-600 dark:hover:bg-zinc-700"
              >
                Enviar
              </button>
            </div>
          </div>
        )}
        {token !== '' && !verificar && (
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold dark:text-white">Recuperar contraseña</h2>
            <p className='dark:text-white'>{message}</p>
            <p className="mt-4 dark:text-white">
              Ingresa el código que te hemos enviado a tu correo electrónico
            </p>
            <div className='mt-4 dark:text-white'>
              <InputOTP onChangeCapture={handleChangeToken} maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            {error && <p className="text-red-600 mt-4">{error}</p>}
            <div>
              <button
                onClick={verificarToken}
                type="button"
                className="px-8 py-2 mt-8 text-white bg-secundario-500 rounded-md"
              >
                Verificar
              </button>
            </div>
          </div>
        )}
        {
          verificar && (
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Recuperar contraseña</h2>
              <p>Ingresa tu nueva contraseña</p>
              <input
                onChange={(e) => setContrasena(e.target.value)}
                value={contrasena}
                type="password"
                className="w-80 p-2 mt-4 border border-gray-300 rounded-md"
                placeholder="Contraseña"
              />
              <div>

                <p className="mt-4">
                  {message}
                </p>

                <button
                  onClick={cambiarContrasena}
                  type="button"
                  className="px-8 py-2 mt-8 text-white bg-secundario-500 rounded-md"
                >
                  Cambiar
                </button>
              </div>
            </div>
          )
        }
      </form>
    </LayoutScreen>
  );
};
