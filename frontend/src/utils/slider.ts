/* const slider = document.querySelector('.slider') as HTMLDivElement;
const sliderList = slider.querySelector('.slider .list') as HTMLDivElement;
const thumbnail = document.querySelector('.slider .thumbnail') as HTMLDivElement;
const thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0]);

export function moveSlider(direction: 'next' | 'prev') {
  const sliderItems = sliderList.querySelectorAll('.item');
  const thumbnailItems = document.querySelectorAll('.thumbnail .item');

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
}
 */