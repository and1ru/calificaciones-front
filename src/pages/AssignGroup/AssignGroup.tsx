import { ButtonAssignament } from "../../components/ButtonAssignament/ButtonAssignament";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";
import { ListTeacherSubject } from "../../components/ListTeacherSubject/ListTeacherSubject";
import { SelectGroup } from "../../components/SelectGroup/SelectGroup";
import { StudentsList } from "../../components/StudentsList/StudentsList";

export const AssignGroup = () => {
  return (
    <>
      <HeaderActions />
      <main className="grid grid-cols-2 py-5">
        <h1 className="col-span-2 text-center text-xl font-bold">ASSIGN GROUP</h1>
        <section className="w-100 shadow-xl p-5 rounded-lg mx-auto mt-20">
          <StudentsList />
        </section>
        <section className="w-100 gap-4 shadow-xl p-5 rounded-lg mx-auto mt-20">
          <SelectGroup />
          <ListTeacherSubject/>
        </section>
        <ButtonAssignament />
      </main>
    </>
  );
};
