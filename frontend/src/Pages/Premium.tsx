import { Skeleton } from '@/Components/ui/skeleton';
import { obtenerInfo } from '@/lib/obtenerInfo';
import { TypeEmpresa } from '@/types/empresas';
import { obtenerCookie } from '@/utils/cookies';
import { useEffect, useState } from 'react';
import keys from '@/utils/stripeKeys';

import Stripe from 'stripe';
import empresas from '@/lib/empresas';
import { ArrowBigLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Premium = () => {
  const [empresa, setEmpresa] = useState<TypeEmpresa>({} as TypeEmpresa);
  const [idProducto, setIdProducto] = useState('');

  const stripe = new Stripe(keys.private);

  async function obtenerEmpresa() {
    try {
      const cookie = obtenerCookie('UserId');

      if (!cookie) {
        window.location.href = '/';
        return;
      }

      const response = await obtenerInfo(cookie);
      if (response.status === 200) {
        if ('numero-identificacion' in response.data[0] === false) {
          window.location.href = '/';
          return;
        }

        const data = response.data[0];
        setEmpresa(data);
      }
    } catch {
      console.error('Error al obtener la información de la empresa');
    }
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get('session_id');

    if (sessionId) {
      (async () => {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        const id = obtenerCookie('UserId');

        if(!id) return;

        if (session.status === 'complete') {
          await obtenerEmpresa();
          const response = await empresas.subirNivel(id, 2);

          if (response.status === 200) {
            window.location.href = '/premium';
          }
        } else {
          window.location.href = '/premium';
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      await obtenerEmpresa();
    })();

    (async () => {
      try {
        const price = await stripe.prices.retrieve(
          'price_1Q3iMZKZtU0tQP1oImtErtMe'
        );

        setIdProducto(price.id);
      } catch {
        console.error('Error al obtener el id del producto');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function realizarPago() {
    const session = await stripe.checkout.sessions.create({
      success_url:
        'http://localhost:5173/premium?session_id={CHECKOUT_SESSION_ID}',
      cancel_url:
        'http://localhost:5173/premium?session_id={CHECKOUT_SESSION_ID}',
      line_items: [
        {
          price: idProducto,
          quantity: 1,
        },
      ],
      mode: 'subscription',
    });

    if (session.url) {
      window.location.href = session.url;
    } else {
      console.error('Session URL is null');
    }
  }

  return (
    <section className="flex flex-col h-screen bg-zinc-900 relative overflow-hidden">
      <Link to='/' className='fixed top-0 left-0 mt-8 ml-8 z-20 rounded-full cursor-pointer'>
        <ArrowBigLeft className='text-white' width={40} height={40} />
      </Link>
      {empresa.nombre === undefined ? (
        <Skeleton className="w-screen h-screen bg-slate-400 dark:bg-black z-50" />
      ) : (
        <>
          <div className="absolute bg-principal-700 w-[500px] h-[500px] rounded-full blur-2xl top-2 -left-28"></div>
          <div className="absolute bg-principal-700 w-[500px] h-[500px] rounded-full blur-2xl top-72 -right-40"></div>
          <div className="mt-20 flex justify-center z-20">
            <h2 className="text-white text-center font-semibold text-4xl">
              Planes de precios
            </h2>
          </div>
          <div className="flex justify-evenly items-center h-full w-full">
            <div className="w-[300px] h-[500px] bg-transparent z-10 border-2 flex flex-col p-7 items-center gap-7 justify-center">
              <h2 className="text-center text-white text-xl">
                Plan Gratis Básico
              </h2>
              <h2 className="text-white text-4xl">$0</h2>
              <button disabled={empresa.nivel === 1} className="rounded-3xl border-2 text-white w-40 h-12 hover:bg-white hover:text-black transition-colors duration-300 disabled:bg-white disabled:text-black">
                Empezar
              </button>
              <div className="mt-8 px-8 flex flex-col justify-center items-center gap-4">
                <p className="text-white">
                  Acceso limitado a las funciones básicas.
                </p>
                <p className="text-white">
                  Hasta 10 tarjetas estándar por mes.
                </p>
                <p className="text-white">Opciones básicas de diseño.</p>
              </div>
            </div>
            <div className={`w-[300px] h-[500px] bg-white z-10 border-2 flex flex-col p-7 items-center gap-7 justify-center ${empresa.nivel === 2 && 'card-lvl-2'}`}>
              <h2 className="text-center text-black text-xl">
                Plan Premium
              </h2>
              <h2 className="text-black text-4xl">$5.99/Mes</h2>
              <button
                disabled={empresa.nivel === 2}
                onClick={realizarPago}
                className="rounded-3xl border-2 text-white bg-zinc-900 w-40 h-12 hover:bg-white hover:border-black hover:text-black transition-colors duration-300 disabled:bg-white disabled:text-black disabled:border-black"
              >
                Empezar
              </button>
              <div className="mt-8 px-8 flex flex-col justify-center items-center gap-4">
                <p className="text-black">
                  Hasta 50 tarjetas personalizadas mensuales.
                </p>
                <p className="text-black">Acceso a plantillas premium.</p>
                <p className="text-black">
                  Acceso prioritario a soporte técnico.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
