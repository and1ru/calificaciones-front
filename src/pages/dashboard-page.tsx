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
    const navegar = useNavigate()

    function goToNotas(id:number) {
        navegar(`/notas/${id}`,{replace:true})
    }

    function goToAnotacion() {
        navegar(`/anotacion`,{replace:true})
    }

    return (
        <>
            <HeaderComponent />
            <main className="p-7">
                <h1>Hola, Nombre</h1>
                <section className="grid grid-cols-3 gap-5">
                    { teacherGroups.map((group) => (<GroupComponent group={group.group} id={group.id} subject={group.subject}/>))}
                </section>
                <section>
                    <button 
                    onClick={() => goToNotas(1)}
                    className="bg-gray-800 text-white p-2 rounded-lg mr-5">Ver notas</button>
                    <button className="bg-gray-800 text-white p-2 rounded-lg">Ver anotaciones</button>
                    <button className="bg-gray-800 text-white p-2 rounded-lg" onClick={goToAnotacion}>hacer anotaciones</button>
                </section>
            </main>
        </>
    );
};
