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
      className="rounded-lg px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 cursor-pointer active:scale-110 transition duration-100"
      >LogOut</button>
  );
};
