import { TypeEmpresa } from '../types/empresas';

declare global {
  interface Window {
    empresas: {
      obtenerEmpresas: () => Promise<{ data: TypeEmpresa[]; status: number }>;
    };
  }
}
