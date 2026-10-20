import { useNavigate } from "react-router-dom";
import { ButtonLogOut } from "../ButtonLogOut/ButtonLogOut";

export const HeaderActions = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/private/dashboard", { replace: true })
  }

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <nav>
        <ul className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <li className="flex gap-7 items-center">
            <button 
              className="bg-gray-700 py-2 px-4 rounded-lg text-white cursor-pointer hover:bg-gray-800 "
              onClick={handleBack}>back</button>
            <h1 className="text-lg font-bold text-gray-800">
              School Management
            </h1>
          </li>
          <li>
            <ButtonLogOut />
          </li>
        </ul>
      </nav>
    </header>
  );
};