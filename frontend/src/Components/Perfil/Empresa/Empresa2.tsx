import { TypeEmpresa } from '@/types/empresas';

export const Empresa2 = (
  { empresa }: { empresa: TypeEmpresa }
) => {
  console.log(empresa);
  return (
    <div className="mt-12 max-w-[70%] mx-auto">
    </div>
  );
};
