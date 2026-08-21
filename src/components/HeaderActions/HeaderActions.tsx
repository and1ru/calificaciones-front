import { useNavigate } from "react-router-dom";

export const HeaderActions = () => {
  const navigate = useNavigate()

  const handleSalir = () => {
    navigate("/login", {replace:true})
  }

  const handleBack = () => {
    navigate("/private/dashboard", {replace:true})
  }
  
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <nav>
        <ul className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <li>
            <button onClick={handleBack}>{"<-"}</button>
          </li>
          <li>
            <h1 className="text-lg font-bold text-gray-800">
              Gestor de Estudios
            </h1>
          </li>
          <li>
            <button
            onClick={handleSalir}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
            >
              Salir
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};