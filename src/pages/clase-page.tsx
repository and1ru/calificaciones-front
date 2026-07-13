import { useRef } from "react";
import { useParams } from "react-router-dom";
import { HeaderComponent } from "../components/header-component";
import { teacherGroups } from "../helper/grupos";
import { estudiantes } from "../helper/notas";

export const ClasePage = () => {
  const agregarNota = useRef<HTMLDialogElement | null>(null);

  const { id } = useParams();

  if (!id) return null;

  const clase = teacherGroups.find((clase) => clase.id === Number(id));

  if (!clase) {
    return <p className="p-8 text-center">Clase no encontrada.</p>;
  }

  const estudiantesFilter = estudiantes.filter(
    (estudiante) => estudiante.id_grupo === clase.id
  );

  const titles = estudiantesFilter[0]?.notas ?? [];

  function openDialog() {
    agregarNota.current?.showModal();
  }

  function closeDialog() {
    agregarNota.current?.close();
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

          <button
            onClick={openDialog}
            className="rounded-lg bg-black px-5 py-2 font-medium text-white transition hover:bg-gray-800"
          >
            Agregar nota
          </button>
        </div>

        <dialog
          ref={agregarNota}
          className="w-full max-w-md rounded-xl p-6 backdrop:bg-black/40"
        >
          <h2 className="mb-6 text-center text-xl font-bold">
            Crear nota
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre de la actividad"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
            />

            <input
              type="number"
              placeholder="Porcentaje"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-black py-2 font-medium text-white hover:bg-gray-800"
            >
              Guardar
            </button>

            <button
              type="button"
              onClick={closeDialog}
              className="w-full rounded-lg bg-red-500 py-2 font-medium text-white hover:bg-red-600"
            >
              Cerrar
            </button>
          </form>
        </dialog>

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
      </main>
    </>
  );
};