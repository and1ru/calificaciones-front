import { Grades } from "../../components/Grades/Grades";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";

export const NotasPage = () => {
  return (
    <>
    <HeaderActions />
    <main className="p-8">
      <section>
        <Grades/>
      </section>
    </main>
    </>
  );
};