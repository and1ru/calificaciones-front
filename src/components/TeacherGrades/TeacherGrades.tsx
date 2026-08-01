import { useParams } from "react-router-dom";
import { teacherGroups } from "../../helper/grupos";
import { estudiantes } from "../../helper/notas";

export const TeacherGrades = () => {
    const { id } = useParams();

    const clase = teacherGroups.find((clase) => clase.id === Number(id));

    if (!clase) {
        return <p className="p-8 text-center">Clase no encontrada.</p>;
    }

    const estudiantesFilter = estudiantes.filter(
        (estudiante) => estudiante.id_grupo === clase.id
    );

    const titles = estudiantesFilter[0]?.notas ?? [];
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border-b px-4 py-3 text-left">
                            Estudiante
                        </th>

                        {titles.map((nota) => (
                            <th
                                key={nota.title}
                                className="border-b px-4 py-3 text-center"
                            >
                                {nota.title}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {estudiantesFilter.map((estudiante) => (
                        <tr
                            key={estudiante.id}
                            className="hover:bg-gray-50"
                        >
                            <td className="border-b px-4 py-3 font-medium">
                                {estudiante.nombre}
                            </td>

                            {estudiante.notas.map((nota) => (
                                <td
                                    key={nota.title}
                                    className="border-b px-4 py-3 text-center"
                                >
                                    {nota.nota}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}