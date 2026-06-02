import { useRef } from "react";
import { HeaderComponent } from "../components/header-component";

export const DashboardPage = () => {

    const joinClass = useRef<HTMLDialogElement | null>(null)
    const createClass = useRef<HTMLDialogElement | null>(null)

    function openCrearClase() {
        if (!createClass.current) return
        createClass.current.show()
        console.log(createClass.current.show())
    }

    function closeCrearClase() {
        if (!createClass.current) return
        createClass.current.close()
        console.log(createClass.current.close())
    }

    function openJoinClass() {
        if (!joinClass.current) return
        joinClass.current.show()
        console.log(joinClass.current.show())
    }

    function closeJoinClass() {
        if (!joinClass.current) return
        joinClass.current.close()
        console.log(joinClass.current.close())
    }

    return (
        <>
            <HeaderComponent />
            <main>
                <section>
                    <div onClick={openCrearClase}>crear clase</div>
                    <div onClick={openJoinClass}>unirse a clase</div>
                </section>
                <dialog ref={joinClass}>
                    <p>junirse</p>
                    <button onClick={closeJoinClass}>cerrar</button>
                </dialog>
                <dialog ref={createClass}>
                    <p>crear</p>
                    <button onClick={closeCrearClase}>cerrar</button>
                </dialog>
            </main>
        </>
    );
};
