import { Layout } from '@/Layouts/Layout';
import { CarouselSpacing } from '@/Components/Home/Carrusel';
import { Link } from 'react-router-dom';
import image1 from '@/assets/Talleres/Talleres-info/image-info1.png';
import image2 from '@/assets/Talleres/Talleres-info/image-info2.png';

export const TalleresInfo = () => {
  return (
    <Layout>
      <div className="bg-secundario-600 flex  h-[500px]">
        <h1 className="text-white font-bold text-5xl flex pt-40 pl-20 w-[40%]">
          ¡Bienvenido a nuestros Talleres Exclusivos!{' '}
        </h1>
      </div>
      <div className="flex">
        <div className="flex -mt-52 items-center gap-8 justify-center">
          {' '}
          <p className="text-principal-400 font-bold text-[300px] flex pl-20">
            1
          </p>
          <Link to="" className="w-[30%] ">
            <img src={image1} alt="" />
          </Link>
        </div>
        <div className="flex -mt-52 items-center gap-8 justify-start">
          {' '}
          <p className="text-principal-400 font-bold text-[300px] flex pl-20">
            2
          </p>
          <Link to="" className="w-[30%]">
            <img src={image2} alt="" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full border-2 border-zinc-400 justify-center">
        <h2 className="font-semibold text-2xl flex">
          Publicidad | Comunicaciones | Diseño
        </h2>
        <div className='flex justify-center items-center'>
          {' '}
          <CarouselSpacing />
        </div>
      </div>
    </Layout>
  );
};
