import { useParams } from "react-router-dom";
import { students } from "../helper/notas2";

export const NotasComponent = () => {
    const { id } = useParams()
    if (!id) return <p>no id</p>

    // obtiene solo 1 estudiante
    const estudiante = students.find((estudiante) => estudiante.id === +id)
    if (!estudiante) return <p>id no encotrado</p>

    return (
        <>
            <p className="text-center text-3xl font-black">{estudiante.name}</p>
            <table>
                <thead>
                    <tr>
                        <th className="border p-2">Materia</th>
                        <th className="border p-2">Profesor</th>
                        <th className="border p-2">Promedio</th>
                        <th className="border p-2">action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        estudiante.subjects.map((subject) => (
                        <tr key={subject.id}>
                            <td className="p-2 border text-center">{subject.name}</td>
                            <td className="p-2 border text-center">{subject.teacher}</td>
                            <td className="p-2 border text-center">{(subject.grades.reduce((acc, act) => acc + act.score, 0 ) / subject.grades.length).toFixed(2)}</td>
                            <td className="p-2 border text-center"><button className="bg-blue-500 p-2 rounded-lg">Ver mas</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    );
};