import { HeaderComponent } from "../components/header-component";
import { NotasComponent } from "../components/notas-component";

export const NotasPage = () => {
  return (
    <>
    <HeaderComponent />
    <main className="p-8">
      <section>
        <NotasComponent/>
      </section>
    </main>
    </>
  );
};