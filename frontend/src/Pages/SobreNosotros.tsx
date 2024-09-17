import { Footer } from '@/Components/Footer';
import { LayoutAtropos } from '@/Components/LayoutAtropos';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { Animacion } from '@/Components/Sobre-Nosotros/Animacion';
import { Card } from '@/Components/Sobre-Nosotros/Card';
import image from '@/assets/Sobre-Nosotros/image-nosotros-1.png';
import image2 from '@/assets/Sobre-Nosotros/image-nosotros-2.png';
import image3 from '@/assets/Sobre-Nosotros/image-nosotros-3.png';

export const SobreNosotros = () => {
  return (
    <section className="flex flex-col bg-gradient-to-br dark:to-zinc-800 dark:from-zinc-700">
      <MenuDesktop />
      <MenuMovil />
      <div className="mt-8 md:mt-28">
        <div className="w-full px-4 md:px-14 xl:px-36 mx-auto rounded-2xl">
          <img src={image} alt="imagen NextStep" className="w-full shadow-img" />
        </div>
        <div className="relative flex flex-col">
          <h2 className="mt-20 text-4xl font-bold pl-4 md:pl-14 xl:text-5xl xl:pl-36 dark:text-white">
            Somos NextStep
          </h2>
          <div className="flex flex-col xl:flex-row items-center xl:px-36 dark:text-white">
            <p className="px-4 mt-4 md:px-14 xl:px-0 xl:mr-4 xl:text-lg">
              Somos una plataforma innovadora dedicada a conectar a empresas con
              emprendedores que buscan oportunidades para adquirir experiencia
              laboral. A través de nuestra aplicación web, facilitamos el
              encuentro entre compañías que necesitan tareas a corto plazo y
              personas sin experiencia que desean desarrollarse
              profesionalmente. Ofrecemos un espacio donde la colaboración y la
              motivación son fundamentales, utilizando tecnologías avanzadas
              como la inteligencia artificial para asegurar que cada tarea sea
              asignada de manera óptima, brindando tanto a empresas como a
              trabajadores la oportunidad de crecer y alcanzar sus objetivos.
            </p>
            <img
              src={image2}
              alt="imagen NextStep"
              className="mt-4 xl:mt-0 w-[50%] md:w-[400px] h-auto z-50"
            />
          </div>
          <LayoutAtropos
            innerClass="w-16 h-16 rounded-full bg-gradient-to-r from-[#D45B4A] to-[#D45B4A] dark:to-zinc-700 dark:from-zinc-600"
            styles="absolute top-[80%] left-[8%] md:top-[70%] md:left-[80%] z-20 xl:top-[18%] xl:left-[60%]"
          />
          <LayoutAtropos
            innerClass="w-24 h-24 rounded-full bg-gradient-to-r from-[#D45B4A] to-[#D45B4A] dark:to-zinc-700 dark:from-zinc-600"
            styles="absolute top-[70%] right-[8%] md:top-[80%] md:left-[85%] z-20"
          />
        </div>
        <div className="relative flex flex-col justify-center items-center md:flex-row md:gap-8 md:mt-16 xl:h-screen xl:gap-24">
          <Card
            text="Conectar talentos emergentes con empresas de cualquier escala,
                ofreciendo experiencias prácticas y valiosas a través de un
                voluntariado que inspire y prepare a las nuevas generaciones
                para enfrentar los desafíos del mundo laboral. Facilitamos el
                desarrollo de habilidades y la creación de redes de apoyo que
                impulsen tanto el crecimiento personal como el éxito
                empresarial."
            titulo="Misión"
          />
          <Card
            text="Ser la plataforma líder en voluntariado corporativo y desarrollo
                emprendedor, reconocida por su capacidad para transformar la
                falta de experiencia laboral en oportunidades reales de
                crecimiento personal y profesional. Aspiramos a construir una
                comunidad global donde empresas y emprendedores colaboren para
                generar impacto social, innovación y sostenibilidad en el mundo
                empresaria."
            titulo="Visión"
          />
        </div>
        <div className="mx-auto flex flex-col items-center justify-center mt-40 md:mt-30 lg:mt-20 xl:mt-10">
          <img
            src={image3}
            alt="imagen NextStep"
            className="mx-auto w-[40%] md:w-[30%] lg:w-[25%] dark:saturate-0"
          />
          <p className="px-8 text-center md:px-0 mt-4 md:mt-20  md:max-w-[70%] lg:text-base lg:mt-10 xl:max-w-[50%] xl:text-lg dark:text-white">
            Nuestra plataforma prioriza la seguridad de todos nuestros usuarios.
            Implementamos protocolos avanzados de encriptación y medidas de
            protección de datos para garantizar que la información personal y
            las transacciones se mantengan seguras en todo momento. Con un
            enfoque constante en la seguridad cibernética, aseguramos que tanto
            empresas como emprendedores puedan interactuar con confianza y
            tranquilidad en nuestro sitio web.
          </p>
        </div>
        <Animacion />
        <div className="-mt-48 mb-48 md:-mt-20 lg:-mt-40">
          <h2 className="text-3xl md:text-5xl font-bold ml-[4%] dark:text-white">¡Únete a Nosotros¡</h2>
        </div>
      </div>
      <Footer />
    </section>
  );
};
