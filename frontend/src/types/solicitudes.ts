export interface TypeSolicitudes {
  'id': string;
  'id-empresa': string;
  'id-trabajador': string;
  'id-trabajo': string;
  'imagen': string;
  'estado': Estado;
  'titulo': string;
  'usuario': string;
  'titulo-trabajo': string;
}

export type Estado = 'pendiente' | 'aceptado' | 'rechazado';