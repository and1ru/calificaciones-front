import React, { useState } from "react";
import { estudiantes } from "../helper/notas";

interface estudianteP {
    id: number;
    nombre: string;
    id_grupo: number;
    notas: {
        title: string;
        nota: number;
    }[];
}

export const AnotacionPage = () => {
    const [grupo, _setGrupo] = useState<number[]>([])
    const [estudiante, setEstudiante] = useState<estudianteP[]>([])

    const newGroup = new Set<number>()

    for (let i = 0; i < estudiantes.length; i++) {
        newGroup.add(estudiantes[i].id_grupo)
    }

    for (let gr of newGroup) {
        grupo.push(gr)
    }

    function handleGroup(e: React.ChangeEvent<HTMLSelectElement>) {
        console.log(e.target.value)
        const v = estudiantes.filter((estudiante) => estudiante.id_grupo === +e.target.value)
        setEstudiante(v)
    }

    return (
        <>
            <main className="p-5">
                <h1 className="text-center text-2xl font-bold">Anotacion</h1>
                <section>
                    <form className="flex flex-col p-7 border">
                        <select name="" id="" onChange={handleGroup} className="border">
                            <option value={0}>selecciona un grupo</option>
                            {grupo.map((gr) => (<option key={gr}>{gr}</option>))}
                        </select>
                        <select name="" id="" className="border">
                            <option value="">seleccione un estudiante</option>
                            {estudiante.map((e) => <option key={e.id}>{e.nombre}</option>)}
                        </select>
                        <textarea
                            className="border"
                            name="" id="" placeholder="Escribe tu anotacion..."></textarea>
                        <button>Enviar</button>
                    </form>
                </section>
            </main>
        </>
    );
};
