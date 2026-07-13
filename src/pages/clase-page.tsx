import { useParams } from "react-router-dom";
import { HeaderComponent } from "../components/header-component";
import { teacherGroups } from "../helper/grupos";
import { CreateNotaComponent } from "../components/crear-nota-component";
import { NotasTeacherComponent } from "../components/notas-teacher-component";

export const ClasePage = () => {

  const { id } = useParams();

  if (!id) return null;

  const clase = teacherGroups.find((clase) => clase.id === Number(id));

  if (!clase) {
    return <p className="p-8 text-center">Clase no encontrada.</p>;
  }



  return (
    <>
      <HeaderComponent />
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
          <CreateNotaComponent/>
        </div>

        {/* asignar un componente para la asistencia */}

        <NotasTeacherComponent/>
      </main>
    </>
  );
};