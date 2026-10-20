import { useEffect, useRef, type ReactNode } from "react";

interface Props {
    error: boolean
    children: ReactNode
}

export const Error = ({ error, children }: Props) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    const close = () => {
        dialogRef.current?.close()
    }

    const show = () => {
        dialogRef.current?.showModal()
    }

    useEffect(() => {
        if (error) {
            show()
        }
    }, [error])

    return (
        <dialog
            ref={dialogRef}
            className="m-auto py-10 px-15 rounded-lg"
        >
            <div className="border-7 bg-red-100 border-red-500 rounded-full h-40 w-40 m-auto text-center content-center text-6xl">❌</div>
            <div className="text-red-500 my-5 font-bold text-lg">
                {children}
                <p className="text-center">Try it again</p>
            </div>
            <button onClick={close} className="bg-red-500 w-full py-2 rounded-lg hover:bg-red-600 outline-none">Close</button>
        </dialog>
    );
};
