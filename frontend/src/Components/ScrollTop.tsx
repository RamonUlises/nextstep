import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al tope (arriba)
  }, [pathname]);

  return null; // No renderiza nada, solo controla el scroll
};
