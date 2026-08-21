import { useNavigate } from "react-router-dom";

export const HeaderDashboard = () => {
  const navigate = useNavigate()

  const handleSalir = () => {
    navigate("/login", {replace:true})
  }

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-lg font-bold text-gray-800">
            Gestor de Estudios
          </h1>
        </div>

        <button
        onClick={handleSalir}
          className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
        >
          Salir
        </button>
      </nav>
    </header>
  );
};