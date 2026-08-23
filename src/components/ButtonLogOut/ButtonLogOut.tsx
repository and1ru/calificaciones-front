import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../customHooks/useLogOut/useLogOut";

export const ButtonLogOut = () => {
    const navigate = useNavigate()
    const { logOut } = useLogOut()
    const handleClick = () => {
        logOut()
        navigate("/login", { replace:true })
    }
  return (
    <button 
    onClick={handleClick}
    className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black">LogOut</button>
  );
};
