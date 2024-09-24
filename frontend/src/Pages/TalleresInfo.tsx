import { Layout } from '@/Layouts/Layout';
import { CarouselSpacing } from '@/Components/Home/Carrusel';
import { Link } from 'react-router-dom';
import image1 from '@/assets/Talleres/Talleres-info/image-info1.png';
import image2 from '@/assets/Talleres/Talleres-info/image-info2.png';
import image3 from '@/assets/Talleres/Talleres-info/image..1.png';
import image4 from '@/assets/Talleres/Talleres-info/image..2.png';
import image5 from '@/assets/Talleres/Talleres-info/image..3.png';
import image6 from '@/assets/Talleres/Talleres-info/image..4.png';
import image7 from '@/assets/Talleres/Talleres-info/image..5.png';
import image8 from '@/assets/Talleres/Talleres-info/image..6.png';
import image9 from '@/assets/Talleres/Talleres-info/image..7.png';
import image10 from '@/assets/Talleres/Talleres-info/image..8.png';
import image11 from '@/assets/Talleres/Talleres-info/image..9.png';
import image12 from '@/assets/Talleres/Talleres-info/image..10.png';
import image13 from '@/assets/Talleres/Talleres-info/image..11.png';
import image14 from '@/assets/Talleres/Talleres-info/image..12.png';
import image15 from '@/assets/Talleres/Talleres-info/image..13.png';
import image16 from '@/assets/Talleres/Talleres-info/image..14.png';
import image17 from '@/assets/Talleres/Talleres-info/image..15.png';
import image18 from '@/assets/Talleres/Talleres-info/image..16.png';
import image19 from '@/assets/Talleres/Talleres-info/image..17.png';
import image20 from '@/assets/Talleres/Talleres-info/image..18.png';
import image21 from '@/assets/Talleres/Talleres-info/image..19.png';
import image22 from '@/assets/Talleres/Talleres-info/image..20.png';
import image23 from '@/assets/Talleres/Talleres-info/image..21.png';
import image24 from '@/assets/Talleres/Talleres-info/image..22.png';
import image25 from '@/assets/Talleres/Talleres-info/image..23.png';
import image26 from '@/assets/Talleres/Talleres-info/image..24.png';
import image27 from '@/assets/Talleres/Talleres-info/image..25.png';
import image28 from '@/assets/Talleres/Talleres-info/image..26.png';

export const TalleresInfo = () => {
  const imagenes = [image3, image4, image1, image5, image6, image7];
  const imagenes2 = [image8, image9, image10, image11, image12];
  const imagenes3 = [image13, image2, image14, image15, image16, image17];
  const imagenes4 = [image18, image19, image20];
  const imagenes5 = [image21, image22, image23];
  const imagenes6 = [image24, image25, image26];
  const imagenes7 = [image27, image28];
  const texts = [
    '',
  ];
  return (
    <Layout>
      <div className="bg-secundario-600 flex  h-[500px] dark:bg-zinc-600">
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
      <div className="flex flex-col w-full justify-center mt-36">
        <h2 className="font-semibold text-2xl flex pl-[175px] dark:text-white">
          Publicidad | Comunicaciones | Diseño
        </h2>
        <div className="flex justify-center items-center">
          {' '}
          <CarouselSpacing images={imagenes} />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center mt-24 ">
        <h2 className="font-semibold text-2xl flex pl-[175px] dark:text-white">
          Informática | Internet
        </h2>
        <div className="flex justify-center items-center">
          {' '}
          <CarouselSpacing images={imagenes2} />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center mt-24 ">
        <h2 className="font-semibold text-2xl flex pl-[175px] dark:text-white">
          Mercadeo | Ventas
        </h2>
        <div className="flex justify-center items-center">
          {' '}
          <CarouselSpacing images={imagenes3} />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center mt-24 ">
        <h2 className="font-semibold text-2xl flex pl-[175px] dark:text-white">
          Administración
        </h2>
        <div className="flex justify-center items-center">
          {' '}
          <CarouselSpacing images={imagenes4} />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center mt-24 ">
        <h2 className="font-semibold text-2xl flex pl-[175px] dark:text-white">
          Recursos Humanos
        </h2>
        <div className="flex justify-center items-center">
          {' '}
          <CarouselSpacing images={imagenes5} />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center mt-24 ">
        <h2 className="font-semibold text-2xl flex pl-[175px] dark:text-white">
          Finanzas | Contabilidad | Auditoria
        </h2>
        <div className="flex justify-center items-center">
          {' '}
          <CarouselSpacing images={imagenes6} />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center mt-24 ">
        <h2 className="font-semibold text-2xl flex pl-[175px] dark:text-white">
          Producción | Ingeniería
        </h2>
        <div className="flex justify-center items-center">
          {' '}
          <CarouselSpacing images={imagenes7} />
        </div>
      </div>
    </Layout>
  );
};
