import { Grades } from "../../components/Grades/Grades";
import { Header } from "../../components/Header/Header";


export const NotasPage = () => {
  return (
    <>
    <Header />
    <main className="p-8">
      <section>
        <Grades/>
      </section>
    </main>
    </>
  );
};