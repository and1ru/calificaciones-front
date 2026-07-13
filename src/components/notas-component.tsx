import { useParams } from "react-router-dom";
import { students } from "../helper/notas2";

export const NotasComponent = () => {
  const { id } = useParams();

  if (!id) return <p>No se encontró el id.</p>;

  // Obtiene un solo estudiante
  const estudiante = students.find((estudiante) => estudiante.id === +id);

  if (!estudiante) return <p>Estudiante no encontrado.</p>;

  const notas = [
    {
      actividad: "Taller 1",
      porcentaje: "10%",
      nota: 4.5,
    },
    {
      actividad: "Quiz 1",
      porcentaje: "15%",
      nota: 3.8,
    },
    {
      actividad: "Parcial",
      porcentaje: "30%",
      nota: 4.2,
    },
    {
      actividad: "Exposición",
      porcentaje: "15%",
      nota: 5.0,
    },
    {
      actividad: "Proyecto Final",
      porcentaje: "30%",
      nota: 4.7,
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Matemáticas
      </h2>

      <p className="text-gray-600">
        <span className="font-semibold">Profesor:</span> Goku
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Actividad</th>
              <th className="px-4 py-3 text-center">Porcentaje</th>
              <th className="px-4 py-3 text-center">Nota</th>
            </tr>
          </thead>

          <tbody>
            {notas.map((nota) => (
              <tr
                key={nota.actividad}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3">{nota.actividad}</td>
                <td className="px-4 py-3 text-center">
                  {nota.porcentaje}
                </td>
                <td className="px-4 py-3 text-center font-medium">
                  {nota.nota}
                </td>
              </tr>
            ))}

            <tr className="bg-gray-100 font-semibold">
              <td className="px-4 py-3">Promedio</td>
              <td></td>
              <td className="px-4 py-3 text-center">4.44</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};