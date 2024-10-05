import { TypeColaboradores } from '@/types/colaboradores';
import { TypeEmpresa } from '@/types/empresas';

export function sortStars(element: TypeEmpresa[] | TypeColaboradores[]){
  const sort = element.sort((a, b) => {
    let promedioA = a.puntuacion / a.puntuados;
    let promedioB = b.puntuacion / b.puntuados;

    if(isNaN(promedioA)){
      promedioA = 5;
    }
    if(isNaN(promedioB)){
      promedioB = 5;
    }

    return promedioB - promedioA;
  });

  return sort;
}
