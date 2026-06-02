import { useRef } from "react";
import { HeaderComponent } from "../components/header-component";
import { teacherGroups } from "../helper/grupos";
import { useParams } from "react-router-dom";

export const ClasePage = () => {
    const agregarNota = useRef<null | HTMLDialogElement>(null)

    function openDialog() {
        if (!agregarNota) return
        agregarNota.current?.showModal()
    }

    function closeDialog() {
        if (!agregarNota) return
        agregarNota.current?.close()
    }

    const { id } = useParams()

    if(!id) return

    const clase = teacherGroups.find((clase) => clase.id === +id)

    if(!clase) return <p>clase no encontrada</p>

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <main>
                <h1 className="text-center text-2xl font-bold">CLASE: {clase?.group}</h1>
                <section>
                    <button className="bg-gray-800 p-2 rounded-lg text-white " onClick={openDialog}>Agregar Nota</button>
                    <dialog className="backdrop:bg-black/50 w-70 h-100 rounded-lg m-auto p-6" ref={agregarNota}>
                        <h2 className="text-center text-xl font-bold mb-5">Crear Nota</h2>
                        <form>
                            <input type="text" placeholder="nombre de tarea"/>
                        </form>
                        <button onClick={closeDialog} className="bg-red-500 w-full p-2 rounded-lg font-bold">Cerrar</button>
                    </dialog>
                </section>
            </main>
        </>
    );
};
