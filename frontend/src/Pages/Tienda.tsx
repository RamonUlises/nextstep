import { Layout } from '@/Layouts/Layout';
import image from '@/assets/Tienda/baner.png';
import image2 from '@/assets/Tienda/bolso.png';
import image3 from '@/assets/Tienda/camisa.png';
import image4 from '@/assets/Tienda/gorra.png';
import image5 from '@/assets/Tienda/sueter.png';

export const Tienda = () => {
  return (
    <Layout>
      <div className="flex flex-col border- border-zinc-800 md:mt-[100px]">
        <img src={image} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col justify-center items-center">
          <figcaption className="w-full md:h-[400px] max-w-[500px]">
            <img
              src={image2}
              alt="imagenes"
              className="w-full h-full object-contain"
            />
          </figcaption>
          <div className="flex items-center gap-3">
            <h2>Colores</h2>
            <div className="bg-zinc-900 w-3 h-3 rounded-full"></div>
            <div className="bg-principal-600 w-3 h-3 rounded-full"></div>
          </div>
          <p>Tallas: S, M , L, XL , XXL </p>
        </article>
        <article className="flex flex-col justify-center items-center">
          <figcaption className="w-full md:h-[400px] max-w-[500px]">
            <img
              src={image4}
              alt="imagenes"
              className="w-full h-full object-contain"
            />
          </figcaption>
          <div className="flex items-center gap-3">
            <h2>Colores</h2>
            <div className="bg-zinc-900 w-3 h-3 rounded-full"></div>
            <div className="bg-principal-600 w-3 h-3 rounded-full"></div>
          </div>
        </article>
        <article className="flex flex-col justify-center items-center">
          <figcaption className="w-full md:h-[350px] max-w-[300px]">
            <img
              src={image5}
              alt="imagenes"
              className="w-full h-full object-contain"
            />
          </figcaption>
          <div className="flex items-center gap-3">
            <h2>Colores</h2>
            <div className="bg-zinc-900 w-3 h-3 rounded-full"></div>
            <div className="bg-principal-600 w-3 h-3 rounded-full"></div>

          </div>
        </article>
        <article className="flex flex-col justify-center items-center">
          <figcaption className="w-full md:h-[400px] max-w-[300px]">
            <img
              src={image3}
              alt="imagenes"
              className="w-full h-full object-contain"
            />
          </figcaption>
          <div className="flex items-center gap-3">
            <h2>Colores</h2>
            <div className="bg-zinc-900 w-3 h-3 rounded-full"></div>
            <div className="bg-principal-600 w-3 h-3 rounded-full"></div>
          </div>
        </article>
      </div>
    </Layout>
  );
};
