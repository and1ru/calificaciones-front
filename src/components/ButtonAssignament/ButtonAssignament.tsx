import { useAssignContext } from "../../context/AssignContext/AssignContext";
import { useCreateAssignment } from "../../customHooks/useCreateAssignment/useCreateAssignment";

export const ButtonAssignament = () => {
  const { assign } = useAssignContext()
  const { createAssignment } = useCreateAssignment()

  const handleClick = () => {
    createAssignment(assign)
  }

  return (
    <button className="mx-auto mt-10 col-span-2 bg-green-400 w-30 h-20 rounded-lg font-bold " onClick={handleClick}>CREAR</button>
  );
};
  