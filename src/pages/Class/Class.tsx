import { useParams } from "react-router-dom";
import { teacherGroups } from "../../helper/grupos";
import { Header } from "../../components/Header/Header";
import { CreateGrade } from "../../components/CreateGrade/CreateGrade";
import { TeacherGrades } from "../../components/TeacherGrades/TeacherGrades";

export const Class = () => {
  const { id } = useParams();

  if (!id) return null;

  const clase = teacherGroups.find((clase) => clase.id === Number(id));

  if (!clase) {
    return <p className="p-8 text-center">Clase no encontrada.</p>;
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {clase.subject}
            </h1>

            <p className="mt-1 text-gray-500">
              Grupo {clase.group}
            </p>
          </div>
          <CreateGrade/>
        </div>

        {/* asignar un componente para la asistencia */}

        <TeacherGrades/>
      </main>
    </>
  );
};