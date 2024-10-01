import { Layout } from '@/Layouts/Layout';
import image from '@/assets/Tienda/baner.png';
import image2 from '@/assets/Tienda/bolso.png';
import image3 from '@/assets/Tienda/camisa.png';
import image4 from '@/assets/Tienda/gorra.png';
import image5 from '@/assets/Tienda/sueter.png';

export const Tienda = () => {
  return (
    <Layout>
      <div className="flex flex-col border- border-zinc-800 mt-[100px]">
        <img src={image} alt="" />
      </div>
      <div className="tienda-css pt-32">
        <div className='flex flex-col'>
          <img className="w-full h-full object-cover" src={image5} alt="" />
          <h2>Sueter</h2>
          <p>Colores </p><span className='block w-4 h-4 bg-black rounded-full'></span>
        </div>
        <div>
          <img className="w-full h-full object-cover" src={image2} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={image4} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={image3} alt="" />
        </div>
      </div>
    </Layout>
  );
};
