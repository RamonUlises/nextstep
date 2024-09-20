import { Item } from '@/Components/Carrusel/Item';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import { useRef } from 'react';
import imagen1 from '@/assets/Talleres/produccion-ingenieria.jpeg';
import imagen2 from '@/assets/Talleres/image-fondo-talleres.jpg';
import imagen3 from '@/assets/Talleres/administracion1.jpeg';

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
                imagen={imagen1}
                title="Hello wordddd"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti temporibus quis eum consequuntur voluptate quae
                    doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Sequi, aut."
                type="FLOWER"
              />
              <Item
                imagen={imagen2}
                title="Hello wordddd"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti temporibus quis eum consequuntur voluptate quae
                    doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Sequi, aut."
                type="FLOWER"
              />
              <Item
                imagen={imagen3}
                title="MAGIC SLIDER"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti temporibus quis eum consequuntur voluptate quae
                    doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Sequi, aut."
                type="FLOWER"
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
                <img src={imagen1} alt="Imagen del carrousel" />
              </div>            
            </div>

            <div className="nextPrevArrows">
              <button onClick={() => moveSlider('prev')} className="prev"> {'<'} </button>
              <button onClick={() => moveSlider('next')} className="next"> {'>'} </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
