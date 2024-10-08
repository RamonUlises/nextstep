import { Item } from '@/Components/Carrusel/Item';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { useRef } from 'react';
import imagen1 from '@/assets/Talleres/Talleres-info/image..16.png';
import imagen2 from '@/assets/Talleres/Talleres-info/image..6.png';
import imagen3 from '@/assets/Talleres/Talleres-info/image..26.png';
import imagen4 from '@/assets/Talleres/Talleres-info/image-info2.png';
import imagen5 from '@/assets/Talleres/Talleres-info/image-info1.png';
import imagen6 from '@/assets/Talleres/Talleres-info/image..20.png';
import imagen7 from '@/assets/Talleres/Talleres-info/image..24.png';

export const Talleres = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderListRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const moveSlider = (direction: 'next' | 'prev') => {
    const slider = sliderRef.current;
    const sliderList = sliderListRef.current;
    const thumbnail = thumbnailRef.current;

    if (!slider || !sliderList || !thumbnail) return;

    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add('next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add('prev');
    }

    slider.addEventListener(
      'animationend',
      function () {
        if (direction === 'next') {
          slider.classList.remove('next');
        } else {
          slider.classList.remove('prev');
        }
      },
      { once: true }
    ); // Remove the event listener after it's triggered once
  };
  return (
    <>
      <section className="flex flex-col h-screen">
        <MenuDesktop />
        <MenuMovil />
        <div>
          <div className="slider" ref={sliderRef}>
            <div className="list" ref={sliderListRef}>
              <Item
                taller='administracion'
                imagen={imagen1}
                description="Este taller está diseñado para brindar a los participantes los conocimientos esenciales sobre la gestión efectiva de recursos, planificación estratégica y toma de decisiones. A través de ejemplos prácticos y herramientas modernas, aprenderás a organizar, coordinar y dirigir equipos y proyectos con eficiencia, mejorando tanto los procesos internos como los resultados de la organización."
                type="Administración"
              />
              <Item
                taller='informatica'
                imagen={imagen2}
                description="En este taller, los participantes adquirirán habilidades fundamentales en el uso de la informática moderna y la navegación por Internet. Se cubrirán aspectos como la gestión de archivos, el uso eficiente de sistemas operativos, y el manejo de herramientas en línea, además de explorar la seguridad digital y cómo proteger la información personal en la red. Ideal para quienes desean mejorar sus competencias digitales y estar al día con las tecnologías actuales."
                type="Informática | Internet"
              />
              <Item
                taller='produccion'
                imagen={imagen3}
                description="Este taller está orientado a desarrollar habilidades clave en la planificación, diseño y optimización de procesos productivos en diversos sectores industriales. Los participantes aprenderán sobre métodos de control de calidad, técnicas de mejora continua, y cómo implementar soluciones ingenieriles para aumentar la eficiencia y reducir los costos. Ideal para estudiantes y profesionales interesados en la gestión y optimización de procesos productivos mediante la ingeniería."
                type="Producción | Ingeniería"
              />
              <Item
                taller='mercadeo'
                imagen={imagen4}
                description="Este taller está enfocado en las estrategias clave para captar y fidelizar clientes en un entorno competitivo. Los participantes aprenderán sobre análisis de mercado, técnicas de venta efectivas y cómo desarrollar campañas de marketing digital. A través de estudios de caso y herramientas prácticas, los asistentes podrán mejorar su capacidad para promover productos y servicios, optimizando tanto la venta directa como la relación con los clientes."
                type="Mercadeo | Ventas"
              />
              <Item
                taller='publicidad'
                imagen={imagen5}
                description="Este taller ofrece una visión integral de cómo combinar la creatividad con la estrategia para crear campañas de publicidad impactantes y eficaces. Los participantes explorarán técnicas de diseño gráfico, redacción publicitaria y gestión de medios de comunicación, aprendiendo a desarrollar mensajes claros y atractivos. Ideal para aquellos que desean mejorar sus habilidades en la creación de contenido visual y verbal para comunicar eficazmente con diferentes audiencias."
                type="Publicidad | Comunicaciones | Diseño"
              />
              <Item
                taller='recursos-humanos'
                imagen={imagen6}
                description="Este taller está diseñado para proporcionar a los participantes los conocimientos y habilidades esenciales para gestionar el capital humano en las organizaciones. Se abordarán temas como la selección de personal, desarrollo de talento, gestión de conflictos, y cómo crear un ambiente laboral positivo. Los asistentes aprenderán a implementar políticas de recursos humanos que fomenten el crecimiento individual y organizacional, mejorando la productividad y el bienestar en el trabajo."
                type="Recursos Humanos"
              />
              <Item
                taller='finanzas'
                imagen={imagen7}
                description="Este taller está orientado a desarrollar habilidades clave en la gestión financiera, la contabilidad empresarial y la auditoría interna. Los participantes aprenderán a interpretar estados financieros, aplicar principios contables y realizar auditorías efectivas para asegurar la transparencia y eficiencia en las operaciones financieras. Ideal para quienes buscan mejorar su capacidad para tomar decisiones financieras informadas y garantizar el cumplimiento de normativas fiscales y corporativas."
                type="Finanzas | Contabilidad | Auditoria"
              />
            </div>

            <div className="thumbnail" ref={thumbnailRef}>
              <div className="item">
                <img src={imagen2} alt="Imagen del carrousel" />
              </div>
              <div className="item">
                <img src={imagen3} alt="Imagen del carrousel" />
              </div>
              <div className="item">
                <img src={imagen4} alt="Imagen del carrousel" />
              </div>
              <div className="item">
                <img src={imagen5} alt="Imagen del carrousel" />
              </div>
              <div className="item">
                <img src={imagen6} alt="Imagen del carrousel" />
              </div>
              <div className="item">
                <img src={imagen7} alt="Imagen del carrousel" />
              </div>
              <div className="item">
                <img src={imagen1} alt="Imagen del carrousel" />
              </div>
            </div>

            <div className="nextPrevArrows">
              <button onClick={() => moveSlider('prev')} className="prev">
                {' '}
                {'<'}{' '}
              </button>
              <button onClick={() => moveSlider('next')} className="next">
                {' '}
                {'>'}{' '}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
