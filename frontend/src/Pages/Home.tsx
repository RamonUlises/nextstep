import { MenuDesktop } from "../Components/MenuDesktop";
import { ButtonsIndex } from "../Components/ButtonsIndex";

export const Home = () => {
  return (
    <>
      <main className="flex flex-col h-screen bg-fondo">
        <MenuDesktop />
        <div className="mt-[103px]">
          <ButtonsIndex text="Empresa" url="/login/empresas" />
        </div>
      </main>
    </>
  );
};
