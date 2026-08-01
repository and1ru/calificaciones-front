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

import { StudentDashboard } from "../../components/StudentDashboard/StudentDashboard";
import { TeacherDashboard } from "../../components/TeacherDashboard/TeacherDashboard";

export const Dashboard = () => {
  return (
    <>
    <StudentDashboard/>
    {/* <TeacherDashboard/> */}
    </>
  );
};