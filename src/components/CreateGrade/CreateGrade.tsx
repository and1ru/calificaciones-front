import { useRef } from "react";

export const CreateGrade = () => {
  const agregarNota = useRef<HTMLDialogElement | null>(null);

      function openDialog() {
        agregarNota.current?.showModal();
      }
    
      function closeDialog() {
        agregarNota.current?.close();
      }
    return(
        <>
          <button
            onClick={openDialog}
            className="rounded-lg bg-black px-5 py-2 font-medium text-white transition hover:bg-gray-800"
          >
            Agregar nota
          </button>
        

        <dialog
          ref={agregarNota}
          className="w-full max-w-md rounded-xl p-6 backdrop:bg-black/40 m-auto"
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
        </>
        
    )
}