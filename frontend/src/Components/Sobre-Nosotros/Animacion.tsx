import image4 from '@/assets/Sobre-Nosotros/image-nosotros-4.png';
import image5 from '@/assets/Sobre-Nosotros/image-nosotros-5.png';
import image6 from '@/assets/Sobre-Nosotros/image-nosotros-6.png';
import image7 from '@/assets/Sobre-Nosotros/image-nosotros-7.png';

export const Animacion = () => {
  return (
    <div className="relative w-full flex flex-col mt-[100px] h-[800px] md:h-screen">
      <div className="w-full -top-[2%] md:-top-[8%] absolute flex justify-start xl:-top-[15%]">
        <img src={image4} alt="Imagen NextStep" className='w-[55%] dark:saturate-[0.2]' />
      </div>
      <div className="absolute w-full right-0 top-[13%] flex justify-end md:top-[18%]">
        <img src={image5} alt="Imagen NextStep" className='w-[60%] h-[80%] dark:saturate-[0.2]' />
      </div>
      <div className="w-[100%] h-[100%] absolute top-0 left-0">
        <img
          src={image6}
          alt="Imagen NextStep"
          className="w-[100%] h-[30%] md:h-[40%] lg:h-[50%] xl:h-[60%] z-20 dark:saturate-0"
        />
      </div>
      <p className="text-center pt-[300px] mx-8 z-20 md:mx-24 md:pt-[350px] lg:pt-0 lg:text-white lg:mx-0 lg:w-[30%] lg:absolute lg:top-[22%] lg:left-24 xl:top-[30%] font-bold">
        ¡Desarrolla tu carrera con nuestros talleres exclusivos! Canjea tus
        puntos por capacitaciones especiales y avanza profesionalmente
      </p>
      <button className="cursor-pointer rounded-3xl bg-principal-600 text-white mx-auto px-4 py-3 mt-4 lg:bg-white lg:text-black lg:mt-0 lg:-[30%] lg:absolute lg:top-[40%] lg:left-[17%] xl:top-[45%]">
        Descubre más
      </button>
      <img
        src={image7}
        alt="Imagen NextStep"
        className="absolute w-[80px] top-[7%] right-[42%] md:w-[110px] xl:w-[160px] xl:top-[10%] xl:right-[40%] dark:saturate-[0.2]"
      />
      <img
        src={image7}
        alt="Imagen NextStep"
        className="absolute w-[70px] top-[2%] md:w-[100px] md:top-[3%] right-[25%] xl:w-[140px] xl:top-[5%] xl:right-[25%] dark:saturate-[0.2]"
      />
      <img
        src={image7}
        alt="Imagen NextStep"
        className="absolute w-[60px] top-[10%] md:w-[80px] md:top-[15%] right-[12%] xl:w-[100px] xl:top-[20%] xl:right-[15%] dark:saturate-[0.2]"
      />
    </div>
  );
};
