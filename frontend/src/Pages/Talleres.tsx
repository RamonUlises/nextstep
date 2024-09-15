import { Item } from '@/Components/Carrusel/Item';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';
import imagen from '@/assets/image-login.png';
import { useRef } from 'react';
// import { moveSlider } from '@/utils/slider';

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
                imagen={imagen}
                title="MAGIC SLIDER"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti temporibus quis eum consequuntur voluptate quae
                    doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Sequi, aut."
                type="FLOWER"
              />
              <Item
                imagen={imagen}
                title="MAGIC SLIDER"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti temporibus quis eum consequuntur voluptate quae
                    doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Sequi, aut."
                type="FLOWER"
              />
              <Item
                imagen={imagen}
                title="MAGIC SLIDER"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti temporibus quis eum consequuntur voluptate quae
                    doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Sequi, aut."
                type="FLOWER"
              />
              <Item
                imagen={imagen}
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
                <img src={imagen} alt="" />
              </div>
              <div className="item">
                <img src={imagen} alt="" />
              </div>
              <div className="item">
                <img src={imagen} alt="" />
              </div>
              <div className="item">
                <img src={imagen} alt="" />
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
