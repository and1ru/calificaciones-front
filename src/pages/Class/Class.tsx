import { useParams } from "react-router-dom";
import { teacherGroups } from "../../helper/grupos";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";
import { CreateGrade } from "../../components/CreateGrade/CreateGrade";
import { TeacherGrades } from "../../components/TeacherGrades/TeacherGrades";
import { useGetGroupsTeacher } from "../../customHooks/useGetGroupsTeacher/useGetGroupsTeacher";

export const Class = () => {
  const { id } = useParams();
  const { data } = useGetGroupsTeacher()
  if (!id) return null;

  const clase = data?.result.find((clase) => clase.group_subject_id === Number(id));

  if (!clase) {
    return <p className="p-8 text-center">Clase no encontrada.</p>;
  }

  return (
    <>
      <HeaderActions />
      <main className="mx-auto max-w-7xl p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {clase.suject.subject_name}
            </h1>

            <p className="mt-1 text-gray-500">
              Grupo {clase.group.group_name}
            </p>
          </div>
          <CreateGrade/>
        </div>
        <TeacherGrades/>
      </main>
    </>
  );
};