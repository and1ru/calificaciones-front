import { useEffect, useRef, type ReactNode } from "react";

interface Props {
    successfully: boolean
    children: ReactNode
}

export const Successfully = ({ successfully, children }:Props) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  
      const close = () => {
          dialogRef.current?.close()
      }
  
      const show = () => {
          dialogRef.current?.showModal()
      }
  
      useEffect(()=> {
          if(successfully){
              show()
          }
      },[successfully])
  
    return (
          <dialog
            ref={dialogRef}
            className="m-auto py-10 px-15 rounded-lg"
        >
            <div className="border-7 bg-green-100 border-green-500 rounded-full h-40 w-40 m-auto text-center content-center text-6xl text-green-500 font-black">✓</div>
            <div className="text-green-500 my-5 font-bold text-lg">
                {children}
            </div>
            <button onClick={close} className="bg-green-500 w-full py-2 rounded-lg hover:bg-green-600 outline-none">Close</button>
        </dialog>
    );
};
