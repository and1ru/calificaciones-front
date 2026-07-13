/*
profesor:
podra seleccionar que grupo tiene y la materia que enseña
podra crear una calificacion y asignar el porcentaje
podra ver el promedio de notas de los estudiantes
podra ver todos los estudiantes que tiene por grupo
podra decir si un estudiante asistio o no
podra imprimir un archivo con las notas de los estudiantes
podra hacer observaciones de los estudiantes

estudiante:
podra ver todas las materias que tiene
podra ver todas las notas y el porcentaje que tiene en la nota final
podra ver el promedio
podra ver el profesor asignado a la materia
podra ver una lista con la asistencia de clase
podra ver que materias va perdiendo, en riesgo o ganando

general:
filtros de 1, 2 semestre / periodo
*/

import { useNavigate } from "react-router-dom";
import { GroupComponent } from "../components/group-component";
import { HeaderComponent } from "../components/header-component";
import { teacherGroups } from "../helper/grupos";

export const DashboardPage = () => {
  const navigate = useNavigate();

  function goToNotas(id: number) {
    navigate(`/notas/${id}`, { replace: true });
  }

  function goToAnotacion() {
    navigate("/anotacion", { replace: true });
  }

  function goToVerAnotacion() {
    navigate("/ver-anotacion", { replace: true });
  }

  return (
    <>
      <HeaderComponent />

      <main className="mx-auto max-w-7xl p-6">
        <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenido, Andres
          </h1>

          <div className="mt-4 space-y-2 text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">Institución:</span>{" "}
              I.E Goku Super Saiyajin
            </p>

            <p>
              <span className="font-semibold text-gray-800">Grupo:</span> 11-1
            </p>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">
              Mis materias
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teacherGroups.map((group) => (
              <GroupComponent
                key={group.id}
                id={group.id}
                subject={group.subject}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};