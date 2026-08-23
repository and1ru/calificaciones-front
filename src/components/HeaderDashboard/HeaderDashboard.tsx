import { ButtonLogOut } from "../ButtonLogOut/ButtonLogOut";

export const HeaderDashboard = () => {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-lg font-bold text-gray-800">
            Gestor de Estudios
          </h1>
        </div>
        <ButtonLogOut/>
      </nav>
    </header>
  );
};