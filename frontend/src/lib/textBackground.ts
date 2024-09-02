import { RefObject } from 'react';

export const textBackground = ({
  circleRef,
  spansRef,
}: {
  circleRef: RefObject<HTMLDivElement>;
  spansRef: RefObject<(HTMLSpanElement | null)[]>;
}) => {
  const circle = circleRef.current;
  if (!circle) return;

  const circleRect = circle.getBoundingClientRect();
  const circleCenterX = circleRect.left + circleRect.width / 2;
  const circleCenterY = circleRect.top + circleRect.height / 2;
  const circleRadius = circleRect.width / 2;

  spansRef.current?.forEach((span) => {
    if (!span) return;

    const spanRect = span.getBoundingClientRect();
    const spanCenterX = spanRect.left + spanRect.width / 2;
    const spanCenterY = spanRect.top + spanRect.height / 2;

    const distance = Math.sqrt(
      Math.pow(spanCenterX - circleCenterX, 2) +
        Math.pow(spanCenterY - circleCenterY, 2)
    );

    const theme = localStorage.getItem('theme');
    if (distance <= circleRadius) {
      if (theme === 'dark') return;
      span.classList.add('text-white');
    } else {
      if (theme === 'dark') return;
      span.classList.add('text-black');
    }
  });
};
